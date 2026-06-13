const fs = require('fs');

const path = 'g:/Development/IAER/Frontend/src/app/best-cyber-security-college-in-kolkata/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const splitMarker = '{/* --- PLACEMENTS & TOP RECRUITERS --- */}';
const splitIndex = content.indexOf(splitMarker);

if (splitIndex === -1) {
  console.error("Could not find split marker");
  process.exit(1);
}

let topPart = content.substring(0, splitIndex);
let bottomPart = content.substring(splitIndex);

// Apply replacements to the bottom part
// 1. Backgrounds
bottomPart = bottomPart.replace(/bg-slate-50/g, 'bg-slate-950');
bottomPart = bottomPart.replace(/bg-white/g, 'bg-slate-900');
// 2. Text Colors
bottomPart = bottomPart.replace(/text-slate-900/g, 'text-white');
bottomPart = bottomPart.replace(/text-slate-800/g, 'text-slate-200');
bottomPart = bottomPart.replace(/text-slate-600/g, 'text-slate-400');
bottomPart = bottomPart.replace(/text-slate-500/g, 'text-slate-400');
// 3. Brand Colors (Blue -> Emerald/Cyan)
bottomPart = bottomPart.replace(/text-\[#143674\]/g, 'text-emerald-400');
bottomPart = bottomPart.replace(/from-\[#143674\]/g, 'from-emerald-500');
bottomPart = bottomPart.replace(/to-\[#0f2e5c\]/g, 'to-cyan-600');
bottomPart = bottomPart.replace(/to-\[#143674\]/g, 'to-cyan-600');
bottomPart = bottomPart.replace(/bg-\[#143674\]/g, 'bg-emerald-500/10');
// 4. Accent Colors (Orange -> Cyan/Emerald)
bottomPart = bottomPart.replace(/text-accent/g, 'text-cyan-400');
bottomPart = bottomPart.replace(/bg-accent/g, 'bg-emerald-500');
// 5. Borders
bottomPart = bottomPart.replace(/border-slate-100/g, 'border-slate-800');
bottomPart = bottomPart.replace(/border-slate-200/g, 'border-emerald-500/20');
bottomPart = bottomPart.replace(/border-white\/10/g, 'border-emerald-500/10');

// Also update the global wrapper at the top of the file
topPart = topPart.replace(/className="min-h-screen bg-slate-50 text-slate-900/, 'className="min-h-screen bg-slate-950 text-slate-300');

// specifically for the awards gradient background
bottomPart = bottomPart.replace(/bg-gradient-to-r from-blue-50 to-indigo-50/, 'bg-slate-950 border-t border-emerald-500/20');

// specifically for the FAQ cards to look like dark glass
bottomPart = bottomPart.replace(/bg-white rounded-2xl border border-slate-200/g, 'bg-slate-900 rounded-2xl border border-emerald-500/20');

content = topPart + bottomPart;

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully re-themed to dark mode.");
