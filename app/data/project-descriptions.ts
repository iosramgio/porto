/**
 * Long-form project blurbs keyed by slug.
 * Kept separate from the main project list so detail routing and static generation stay predictable.
 */
export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
    "management-system-ecommerce-platform":
        "A modern web-based management platform for apparel manufacturers with seamless online ordering, integrated Midtrans payment gateway, and automated order status updates.",
    "diara-cookies-digital-marketing-platform":
        "A full-stack PERN web platform designed for an MSME community service initiative, combining an interactive product storefront, automated WhatsApp checkout, and a comprehensive admin Mini-CMS for inventory and financial reconciliation.",
    "smart-glove-bisindo-translator":
        "An IoT and deep learning smart glove using ESP32, flex sensors, and a 1D CNN-LSTM model to translate dynamic BISINDO sign language into text in real time.",
};

export function getProjectDescription(slug: string): string | undefined {
    return PROJECT_DESCRIPTIONS[slug];
}
