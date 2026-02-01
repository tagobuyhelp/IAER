export const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/files/IAER_Brochure_2026_Brown_Revised_2.pdf';
    link.download = 'IAER_Brochure_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
