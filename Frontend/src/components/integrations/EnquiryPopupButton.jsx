// components/EnquiryPopupButton.jsx
import React, { useCallback } from "react";

export const WIDGET_ID = "ee13b8b13cddfc1bfec07deacefd996b";
/**
 * Try these patterns if one doesn't match the vendor
 * - https://widgets.nopaperforms.com/widget/<id>
 * - https://widgets.nopaperforms.com/embed/<id>
 * - ask vendor for "direct form URL"
 */
export const FORM_URL = `https://widgets.nopaperforms.com/widget/${WIDGET_ID}`;

export function openCenteredPopup(url, title = "Enquiry", w = 900, h = 700) {
    const dualScreenLeft = window.screenLeft ?? window.screenX ?? 0;
    const dualScreenTop = window.screenTop ?? window.screenY ?? 0;
    const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
    const left = Math.max(0, (width - w) / 2 + dualScreenLeft);
    const top = Math.max(0, (height - h) / 2 + dualScreenTop);

    const features = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${w},height=${h},top=${top},left=${left}`;
    const win = window.open(url, title, features);
    if (!win) {
        // popup blocked — fallback to new tab
        window.open(url, "_blank", "noopener,noreferrer");
        return null;
    }
    win.focus();
    return win;
}

export default function EnquiryPopupButton({ className = "", label = "Enquire Now", children }) {
    const onClick = useCallback(() => {
        try {
            let trigger = document.querySelector(`.npfWidget-${WIDGET_ID}`);
            if (!trigger) {
                trigger = document.createElement("button");
                trigger.type = "button";
                trigger.className = `npfWidgetButton npfWidget-${WIDGET_ID}`;
                trigger.style.display = "none";
                trigger.textContent = "Enquire Now";
                document.body.appendChild(trigger);
            }
            trigger.click();
            return;
        } catch {}

        try {
            const url = `${FORM_URL}?widgetId=${WIDGET_ID}`;
            openCenteredPopup(url, "Enquiry Form", 920, 700);
        } catch {}
    }, []);

    return (
        <button
            type="button"
            onClick={onClick}
            className={className}
            aria-label="Open enquiry form"
        >
            {children || label}
        </button>
    );
}
