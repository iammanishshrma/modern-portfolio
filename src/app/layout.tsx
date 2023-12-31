import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/header/header";
import DotRing from "@/components/dotRing/dotRing";
import MouseContextProvider from "@/context/mouseContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Manish Sharma",
    description: "Manish Sharma's personal website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <MouseContextProvider>
                    <>
                        <DotRing />
                        <main>
                            <Header />
                            {children}
                        </main>
                    </>
                </MouseContextProvider>
            </body>
        </html>
    );
}
