const fs = require('fs');
const path = 'g:/Development/IAER/Frontend/src/app/best-bca-college-in-kolkata/page.jsx';
const bbaPath = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';

let bca = fs.readFileSync(path, 'utf8');
const bba = fs.readFileSync(bbaPath, 'utf8');

const bbaLines = bba.split('\n');
const bcaLines = bca.split('\n');

const getStartIdx = (lines, str) => lines.findIndex(l => l.includes(str));

const bbaStart = getStartIdx(bbaLines, '{/* --- FLOATING BOTTOM CTA BAR --- */}');
const bcaStart = getStartIdx(bcaLines, '{/* --- FLOATING BOTTOM CTA BAR --- */}');

if (bbaStart > -1 && bcaStart > -1) {
    const ctaContent = bbaLines.slice(bbaStart, bbaLines.length - 2).join('\n'); // omit final div and closing
    
    const part1 = bcaLines.slice(0, bcaStart).join('\n');
    const newContent = part1 + '\n' + ctaContent + '\n  );\n}\n';
    
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully replaced CTA bar!');
} else {
    console.log('Could not find CTA bar markers.');
}
