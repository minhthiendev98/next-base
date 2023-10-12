import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/component/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "main-1": "#4C1D95",
                "main-2": "#64748B",
                txt: "#1F2937",
                btnTab: "rgba(76, 29, 149, 0.12)",
                dateChapter: "rgba(31, 41, 55, 0.60)",
                btnCategory: "rgba(76, 29, 149, 0.12)",
                btnCategory2: "rgba(100, 116, 139, 0.18)",
                input: "rgba(31, 41, 55, 0.38)",
                btnLogin: "rgba(255, 255, 255, 0.10)",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
