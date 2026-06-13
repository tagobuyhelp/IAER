const fs = require('fs');
const path = 'g:/Development/IAER/Frontend/src/app/best-bca-college-in-kolkata/page.jsx';
const bbaPath = 'g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx';

let bca = fs.readFileSync(path, 'utf8');
const bba = fs.readFileSync(bbaPath, 'utf8');

// 1. Extract BBA Video Testimonials
const bbaLines = bba.split('\n');
let videoStart = bbaLines.findIndex(l => l.includes('{/* --- VIDEO TESTIMONIALS --- */}'));
let videoEnd = bbaLines.findIndex((l, i) => i > videoStart && l.includes('</section>'));
let videoComponent = bbaLines.slice(videoStart, videoEnd + 1).join('\n');

// 2. Replace the IDs with BCA IDs
videoComponent = videoComponent.replace(
    /'a9YGpIMRb_Y', '6cQxZLkZhgU', 'CoL261COdLY',\s*'eU2Rs3pEvCw', 'g9rJ6-FZrQY',/g,
    "'5spDhZsFmRw', 'KJijsu0t_GA', '7FDem0S7wZU', 'kUYABnLkRU8', 'VfQW9Ex4DQ0',"
);

// 3. Find and remove old BCA Testimonials
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

const testRange = getSectionRange('{/* --- TESTIMONIALS --- */}');
console.log('Testimonials:', testRange);

const part1 = bcaLines.slice(0, testRange.start).join('\n');
const part2 = bcaLines.slice(testRange.end + 1).join('\n');

const newContent = [part1, videoComponent, '\n', part2].join('\n');

fs.writeFileSync(path, newContent, 'utf8');
console.log('Successfully replaced testimonials!');
