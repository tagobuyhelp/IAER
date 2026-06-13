const fs = require('fs');
const path = 'g:/Development/IAER/Frontend/src/app/best-bca-college-in-kolkata/page.jsx';
const bbaPath = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';

let bca = fs.readFileSync(path, 'utf8');
const bba = fs.readFileSync(bbaPath, 'utf8');

// 1. Extract BBA Unified Component
const bbaLines = bba.split('\n');
let unifiedStart = bbaLines.findIndex(l => l.includes('{/* --- UNIFIED: WHY CHOOSE IAER --- */}'));
let unifiedEnd = bbaLines.findIndex((l, i) => i > unifiedStart && l.includes('</section>'));
let unifiedComponent = bbaLines.slice(unifiedStart, unifiedEnd + 1).join('\n');

// Tweak for BCA
unifiedComponent = unifiedComponent.replace(/BBA/g, 'BCA');

// 2. Find and remove old BCA sections
const bcaLines = bca.split('\n');

const getSectionRange = (startStr) => {
    const start = bcaLines.findIndex(l => l.includes(startStr));
    if (start === -1) return null;
    let end = start;
    let depth = 0;
    let foundTag = false;
    for (let i = start; i < bcaLines.length; i++) {
        if (bcaLines[i].includes('<section')) { depth++; foundTag = true; }
        if (bcaLines[i].includes('</section>')) depth--;
        if (foundTag && depth === 0) {
            end = i;
            break;
        }
    }
    return { start, end };
};

const aboutRange = getSectionRange('{/* --- ABOUT --- */}');
const specializationsRange = getSectionRange('{/* --- SPECIALIZATIONS --- */}');
const whyIaerRange = getSectionRange('{/* --- WHY IAER --- */}');
const awardsRange = getSectionRange('{/* --- AWARDS / ACHIEVEMENTS --- */}');

console.log('About:', aboutRange);
console.log('Spec:', specializationsRange);
console.log('Why:', whyIaerRange);
console.log('Awards:', awardsRange);

// We will reconstruct the file.
// Everything up to ABOUT
const part1 = bcaLines.slice(0, aboutRange.start).join('\n');
// Keep Specializations
const part2 = bcaLines.slice(specializationsRange.start, specializationsRange.end + 1).join('\n');
// Insert Unified
const part3 = unifiedComponent;
// Everything after Awards
const part4 = bcaLines.slice(awardsRange.end + 1).join('\n');

const newContent = [part1, part2, '\n', part3, '\n', part4].join('\n');

fs.writeFileSync(path, newContent, 'utf8');
console.log('Successfully merged BCA sections!');
