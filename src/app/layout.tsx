import "./style.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["vietnamese"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} min-h-screen`}>
                <>{children}</>
            </body>
        </html>
    );
}
