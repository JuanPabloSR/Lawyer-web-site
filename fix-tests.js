const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.spec.ts')) {
      callback(dirPath);
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let dirty = false;

  // Fix 1: provideRouter
  if (!content.includes('provideRouter')) {
    // Add import
    const importMatch = content.match(/from\s+['"]@angular\/router['"]/);
    if (importMatch) {
      content = content.replace(/(import\s*{[^}]*)(}\s*from\s*['"]@angular\/router['"])/, '$1, provideRouter $2');
    } else {
      content = `import { provideRouter } from '@angular/router';\n` + content;
    }

    // Add into TestBed
    if (content.includes('TestBed.configureTestingModule({')) {
      if (content.includes('providers: [')) {
        content = content.replace(/providers:\s*\[/, 'providers: [provideRouter([]), ');
      } else {
        content = content.replace(/TestBed\.configureTestingModule\({/, 'TestBed.configureTestingModule({\n      providers: [provideRouter([])],');
      }
      dirty = true;
    }
  }

  // Fix 2: Swiper register, safe to add globally per spec file or modify schemas
  // Only apply to files testing components that might use Swiper (or globally to be safe)
  if (!content.includes('swiper/element/bundle')) {
    content = `import { register } from 'swiper/element/bundle';\nregister();\n` + content;
    dirty = true;
  }
  
  // Fix 3: CUSTOM_ELEMENTS_SCHEMA
  if (!content.includes('CUSTOM_ELEMENTS_SCHEMA')) {
      const coreImportMatch = content.match(/from\s+['"]@angular\/core['"]/);
      if (coreImportMatch) {
         content = content.replace(/(import\s*{[^}]*)(}\s*from\s*['"]@angular\/core['"])/, '$1, CUSTOM_ELEMENTS_SCHEMA $2');
      } else {
         content = `import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n` + content;
      }
      
      if (content.includes('imports: [')) {
          // just append schemas
          if (!content.includes('schemas: [')) {
            content = content.replace(/TestBed\.configureTestingModule\({/, 'TestBed.configureTestingModule({\n      schemas: [CUSTOM_ELEMENTS_SCHEMA],');
          } else {
            content = content.replace(/schemas:\s*\[/, 'schemas: [CUSTOM_ELEMENTS_SCHEMA, ');
          }
      }
      dirty = true;
  }

  // Handle ActivatedRoute specifically if there's an import but no provide
  if (content.includes('ActivatedRoute') && !content.includes('provideRouter')) {
    // We already handled it above, but ensure it's there
  }

  if (dirty) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src', 'app'), processFile);
console.log('Finished updating spec files.');
