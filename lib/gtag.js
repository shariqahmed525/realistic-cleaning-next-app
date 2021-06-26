export const GA_TRACKING_ID = "G-WL1N8FXN2T";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window?.gtag &&
        typeof window?.gtag === "function" &&
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window?.gtag &&
        typeof window?.gtag === "function" &&
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
};
