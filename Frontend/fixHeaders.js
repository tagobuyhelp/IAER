const fs = require('fs');
const path = require('path');

const dir = 'g:/Development/IAER/Frontend/src/components/layout';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    if (content.includes('pathname === "/best-cyber-security-college-in-kolkata") return null;')) {
        content = content.replace(
            'pathname === "/best-cyber-security-college-in-kolkata") return null;',
            'pathname === "/best-cyber-security-college-in-kolkata" || pathname === "/best-data-science-college-in-kolkata") return null;'
        );
    }
    
    if (content.includes('pathname === "/best-cyber-security-college-in-kolkata";')) {
        content = content.replace(
            'pathname === "/best-cyber-security-college-in-kolkata";',
            'pathname === "/best-cyber-security-college-in-kolkata" ||\n                        pathname === "/best-data-science-college-in-kolkata";'
        );
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
});

const rfcPath = path.join(dir, 'RightFloatingCTA.jsx');
if (fs.existsSync(rfcPath)) {
    let rfcContent = fs.readFileSync(rfcPath, 'utf8');
    if (rfcContent.includes('path === "/best-cyber-security-college-in-kolkata"')) {
        rfcContent = rfcContent.replace(
            'path === "/best-cyber-security-college-in-kolkata"',
            'path === "/best-cyber-security-college-in-kolkata" || path === "/best-data-science-college-in-kolkata"'
        );
        fs.writeFileSync(rfcPath, rfcContent, 'utf8');
    }
}

const layoutJsPath = 'g:/Development/IAER/Frontend/src/app/layout.js';
if (fs.existsSync(layoutJsPath)) {
    let layoutContent = fs.readFileSync(layoutJsPath, 'utf8');
    if (layoutContent.includes("'/best-cyber-security-college-in-kolkata'")) {
        layoutContent = layoutContent.replace(
            "'/best-cyber-security-college-in-kolkata'",
            "'/best-cyber-security-college-in-kolkata',\n                  '/best-data-science-college-in-kolkata'"
        );
        fs.writeFileSync(layoutJsPath, layoutContent, 'utf8');
    }
}

console.log("Headers and layout updated for Data Science!");
