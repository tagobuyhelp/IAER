export const handleDownloadBrochure = () => {
    const brochureUrl = '/files/IAER_Brochure_2026_Brown_Revised_2.pdf';
    try {
        const widgetId = window?.__IAER_BROCHURE_WIDGET_ID;
        if (typeof window?.openBrochurePopup === 'function') {
            window.openBrochurePopup(brochureUrl);
            return;
        }
        if (typeof window?.openNpfPopup === 'function' && widgetId) {
            window.openNpfPopup(widgetId);
            return;
        }
        if (widgetId) {
            let trigger = document.querySelector(`.npfWidget-${widgetId}`);
            if (!trigger) {
                trigger = document.createElement('button');
                trigger.type = 'button';
                trigger.className = `npfWidgetButton npfWidget-${widgetId}`;
                trigger.style.display = 'none';
                trigger.textContent = 'Download Brochure';
                document.body.appendChild(trigger);
            }
            trigger.click();
            return;
        }
    } catch {}

    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'IAER_Brochure_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
