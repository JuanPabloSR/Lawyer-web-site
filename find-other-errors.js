const fs = require('fs');
const content = fs.readFileSync('test_output.txt', 'utf8');
const lines = content.split('\n');
const otherErrors = new Set();
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('FAILED') && !lines[i].includes('TOTAL:')) {
    let testName = lines[i].trim();
    let errorMsg = '';
    for(let j=1; j<5; j++) {
       if (lines[i+j] && lines[i+j].trim() !== '' && !lines[i+j].includes('Chrome 145')) {
         errorMsg += lines[i+j].trim() + ' ';
       } else break;
    }
    if (!errorMsg.includes('ActivatedRoute') && !errorMsg.includes('initialize is not a function') && !errorMsg.includes('jQuery is not defined')) {
       otherErrors.add(testName + '\n' + errorMsg);
    }
  }
}
otherErrors.forEach(err => console.log(err + '\n'));
