import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string;
    live: string;
    featured: boolean;
    year: string;
    image: string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
    {
        slug: "management-system-ecommerce-platform",
        title: "Konveksi management system ecommerce platform",
        role: "Full-Stack Developer",
        highlights: [
            "Developed end-to-end management platform for garment manufacturing with online ordering and automated workflow tracking.",
        "Integrated Midtrans Payment Gateway for automated transaction processing and secure payment status callbacks.",
        "Implemented automated WhatsApp notification system via Fonnte API for real-time order status updates to clients.",
        "Engineered an intuitive Admin Dashboard to streamline inventory oversight, order fulfillment, and transaction history.",
        ],
        tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Midtrans", "Fonnte API"],
        github: "https://github.com/iosramgio/appkonveksimax",
        live: "https://Maxsupply.id",
        featured: true,
        year: "2024",
        image: "/images/projects/maxsuply.webp",
    },
    {
        slug: "diara-cookies-digital-marketing-platform",
        title: "Diara Cookies: Digital Marketing & Company Profile Platform",
        role: "Full-Stack Developer",
        highlights: [
            "Developed a full-stack PERN platform for an MSME community service project, featuring a dynamic company profile and product catalog.",
        "Built a robust admin Mini-CMS using Drizzle ORM and PostgreSQL to manage products, order workflows, blogs, and banner assets.",
        "Integrated interactive cart and manual payment checkout flow with unique code generation and direct WhatsApp order redirection.",
        "Implemented secure JWT authentication with HTTP-only cookies and built a bank mutation reconciliation tool supporting CSV imports.",
        ],
        tech: ["PostgreSQL", "Express.js", "React", "Node.js", "Drizzle ORM"],
        github: "https://github.com/iosramgio/diara-cookies",
        live: "https://diara.cookies.com",
        featured: true,
        year: "2023",
        image: "/images/projects/Diara.webp",
    },
    {
        slug: "smart-glove-bisindo-translator",
        title: "IoT Smart Glove: Dynamic BISINDO Sign Language Translator",
        role: "IoT & Machine Learning Engineer",
        highlights: [
            "Engineered an IoT smart glove prototype integrating flex sensors and IMU modules on an ESP32 microcontroller for real-time motion capture.",
        "Designed and trained a hybrid 1D CNN-LSTM deep learning model to accurately classify dynamic Indonesian Sign Language (BISINDO) gestures.",
        "Developed end-to-end sensor data pipeline from microcontrollers to deep learning inference for real-time text output.",
        "Authored and successfully defended undergraduate thesis research evaluating gesture recognition accuracy and system latency.",
        ],
        tech: ["ESP32", "Python", "TensorFlow", "1D CNN-LSTM", "IoT Sensors", "C++"],
        github: "https://github.com/iosramgio/Recognition-App",
        live: "#",
        featured: true,
        year: "2026",
        image: "/images/projects/iotcnn.webp",
    },
];

function attachDescription(core: ProjectCore): Project {
    const description = PROJECT_DESCRIPTIONS[core.slug];
    if (description === undefined) {
        throw new Error(`Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`);
    }
    return { ...core, description };
}

export const projects: readonly Project[] = projectCoreList.map(attachDescription);

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find((project) => project.slug === slug) ?? null;
};
