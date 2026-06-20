const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'assets', 'img');

async function processImage(inputPath, outputPath, width, height, isWebp = true) {
    try {
        if (!fs.existsSync(inputPath)) {
            console.log(`Missing file: ${inputPath}`);
            return;
        }
        let transform = sharp(inputPath).resize({ width: width, height: height, fit: 'cover', withoutEnlargement: true });
        
        if (isWebp) {
            transform = transform.webp({ quality: 80 });
        } else {
            // Keep original format but compressed
            if (outputPath.endsWith('.png')) {
                transform = transform.png({ quality: 80, compressionLevel: 9 });
            } else if (outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg')) {
                transform = transform.jpeg({ quality: 80 });
            }
        }
        
        await transform.toFile(outputPath);
        console.log(`Optimized: ${outputPath}`);
    } catch (e) {
        console.error(`Error processing ${inputPath}:`, e.message);
    }
}

async function main() {
    // 2. Hero Images -> WebP, width 1080 (Output to -opt.webp)
    const heroes = [
        'hero/hero1-slider-img_4526.webp',
        'hero/hero1-slider-img_4624.webp',
        'hero/hero1-slider-img_4546.webp'
    ];
    for (const h of heroes) {
        const p = path.join(baseDir, h);
        await processImage(p, p.replace('.webp', '-opt.webp'), 1080, null, true);
    }

    // 3. Work/Case images -> WebP, width 800
    const works = [
        'work/work1-image4.webp',
        'work/work1-image1.webp',
        'others/case1-image1.webp',
        'others/case1-image3.webp'
    ];
    for (const w of works) {
        const p = path.join(baseDir, w);
        await processImage(p, p.replace('.webp', '-opt.webp'), 800, null, true);
    }

    // 4. Logos -> Keep PNG but compress and resize
    const logos = [
        { p: 'logo/logo_vera.png', w: 400 },
        { p: 'logo/logo_vera_small.png', w: 300 }
    ];
    for (const l of logos) {
        const p = path.join(baseDir, l.p);
        await processImage(p, p.replace('.png', '-opt.png'), l.w, null, false);
    }

    console.log("Done compression!");
}

main();
