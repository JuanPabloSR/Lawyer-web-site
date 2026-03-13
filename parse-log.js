const fs = require('fs');
const content = fs.readFileSync('test_output3.txt', 'utf16le');
// Split by both newline and carriage return
const lines = content.split(/[\r\n]+/);
let found = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('FAILED') && !lines[i].includes('TOTAL:')) {
    console.log('--- FAILURE ---');
    console.log(lines[i].replace(/\x1b\[[0-9;]*m/g, '').trim());
    for(let j=1; j<20; j++) {
       if (lines[i+j] && lines[i+j].trim() !== '') {
         // Stop if we hit another test summary or progress
         if (lines[i+j].includes('Chrome 145')) break;
         console.log(lines[i+j].replace(/\x1b\[[0-9;]*m/g, '').trim());
       } else {
         break;
       }
    }
    found = true;
  }
}
if (!found) { console.log('No FAILED found in output.'); }
