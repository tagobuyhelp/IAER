const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'src', 'app', 'best-cyber-security-college-in-kolkata', 'page.jsx');
const targetFile = path.join(__dirname, 'src', 'app', 'best-data-science-college-in-kolkata', 'page.jsx');

let content = fs.readFileSync(sourceFile, 'utf8');

// Component name
content = content.replace(/CyberSecurityLandingPage/g, 'DataScienceLandingPage');

// Text
content = content.replace(/Cyber Security/g, 'Data Science');
content = content.replace(/cyber security/g, 'data science');
content = content.replace(/Cyber security/g, 'Data science');

// Colors
content = content.replace(/emerald/g, 'violet');
content = content.replace(/cyan/g, 'fuchsia');
content = content.replace(/teal/g, 'fuchsia');

// Image
content = content.replace(/\/images\/cyber_security\/iaer-cyber-security-hero-bg-enterprise-soc-network.png/g, '/images/programs/bsc-in-data-science-banner.webp');

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully generated Data Science page.');
