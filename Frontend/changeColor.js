const fs = require('fs');

const path = 'g:/Development/IAER/Frontend/src/app/best-data-science-college-in-kolkata/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// We want to change the hero and header color.
// Replace #143674 with #0f172a (a premium dark slate color)
content = content.replace(/bg-\[#143674\]/g, 'bg-slate-900');
content = content.replace(/from-\[#143674\]/g, 'from-slate-900');
content = content.replace(/to-\[#143674\]/g, 'to-slate-900');

// specifically for text if we want to change that too in the marquee
// content = content.replace(/text-\[#143674\]/g, 'text-slate-900'); // Let's keep text as deep blue or change to slate-900
content = content.replace(/text-\[#143674\]/g, 'text-slate-900');

fs.writeFileSync(path, content, 'utf8');
console.log('Color updated to slate-900!');
