"use client";

import { useEffect } from "react";

/**
 * LinkFixer Component
 * 
 * This component observes the DOM for third-party widgets (like NPF Chatbot) that inject
 * inaccessible or uncrawlable links (e.g., <a href="javascript:void(0)">).
 * 
 * It automatically patches these elements to be semantic buttons or removes the invalid href
 * to satisfy Lighthouse SEO and Accessibility audits.
 */
export default function LinkFixer() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Function to fix specific elements
        const fixLinks = () => {
            // Selector for NPF Chatbot close buttons and other known offenders
            const selectors = [
                'div.npf_chatbots a[href^="javascript:"]',
                'div.npf_chatbots a[href="#"]',
                'div.default-chatbot-indicator a[href^="javascript:"]',
                'div.default-chatbot-indicator a[href="#"]',
                // Generic catch-all for other 3rd party widgets if needed
                'a.close-icon[href^="javascript:"]',
                'a.close-indicator[href^="javascript:"]'
            ];

            const elements = document.querySelectorAll(selectors.join(","));

            elements.forEach((el) => {
                // Only fix if it hasn't been fixed yet
                if (el.getAttribute("data-fixed-by-iaer")) return;

                // Remove the invalid href
                el.removeAttribute("href");

                // Make it semantically a button
                el.setAttribute("role", "button");
                el.setAttribute("tabindex", "0");

                // Ensure keyboard accessibility (Enter/Space to trigger click)
                el.addEventListener("keydown", (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        el.click();
                    }
                });

                // Mark as fixed
                el.setAttribute("data-fixed-by-iaer", "true");
            });
        };

        // Run immediately in case elements are already there
        fixLinks();

        // Observe DOM changes to catch dynamically injected widgets
        const observer = new MutationObserver((mutations) => {
            let shouldCheck = false;

            for (const mutation of mutations) {
                if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                    shouldCheck = true;
                    break;
                }
            }

            if (shouldCheck) {
                fixLinks();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
