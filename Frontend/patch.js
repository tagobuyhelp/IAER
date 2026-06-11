const fs = require("fs");
const file = "g:/Development/IAER/Frontend/src/app/best-bba-college-in-kolkata/page.jsx";
let content = fs.readFileSync(file, "utf8");

const oldUseEffect = `  useEffect(() => {
    const btnId = 'c4af7a13a0ce4880aa5e45e7e28e4d7e';`;

const oldOnDownload = `  const onDownload = () => {
    console.log("[Meritto BBA] onDownload function invoked, redirecting to onApplyNow");
    onApplyNow();
  };`;

const hookStart = content.indexOf(oldUseEffect);
const hookEnd = content.indexOf(oldOnDownload);

if(hookStart > -1 && hookEnd > -1) {
  const newHook = `  useEffect(() => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, []);\n\n`;
  content = content.substring(0, hookStart) + newHook + content.substring(hookEnd);
} else {
  console.log("Hook not found", hookStart, hookEnd);
}

const oldOnApply = `  const onApplyNow = () => {
    const btnId = 'c4af7a13a0ce4880aa5e45e7e28e4d7e';
    const baseUrl = 'widgets.nopaperforms.com';`;

const applyStart = content.indexOf(oldOnApply);
const observerStart = content.indexOf(`  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;`);

if(applyStart > -1 && observerStart > -1) {
  const newApply = `  const onApplyNow = () => {
    const formElement = document.getElementById("enquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };\n\n`;
  content = content.substring(0, applyStart) + newApply + content.substring(observerStart);
} else {
  console.log("Apply not found", applyStart, observerStart);
}

const heroColStartStr = `<div className="flex flex-col md:col-span-5 items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-0">`;
const heroMarqueeStr = `{/* Marquee */}`;

const colStart = content.indexOf(heroColStartStr);
const marqueeStart = content.indexOf(heroMarqueeStr);

if(colStart > -1 && marqueeStart > -1) {
  const newHeroCol = `<div id="enquiry-form-section" className="flex flex-col md:col-span-5 items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-0 w-full relative z-20">
              <div className="relative w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2 sm:p-4 min-h-[400px] overflow-hidden">
                <div className="npf_wgts" data-height="400px" data-w="c4af7a13a0ce4880aa5e45e7e28e4d7e"></div>
              </div>\n\n              `;
  content = content.substring(0, colStart) + newHeroCol + content.substring(marqueeStart);
} else {
  console.log("Col not found", colStart, marqueeStart);
}

fs.writeFileSync(file, content);
console.log("Updated page.jsx successfully");
