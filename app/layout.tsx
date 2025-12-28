import "./globals.css";
import ClientLayoutWrapper from "@/componenets/ClientLayoutWrapper";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: "Quwah Zone - Calisthenics & Fitness",
        template: "%s | Quwah Zone"
    },
    description: "Your ultimate guide to calisthenics, bodyweight workouts, and fitness transformation at home.",
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.domain),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.domain,
        title: "Quwah Zone - Calisthenics & Fitness",
        description: "Your ultimate guide to calisthenics, bodyweight workouts, and fitness transformation at home.",
        siteName: "Quwah Zone",
    },
    twitter: {
        card: "summary_large_image",
        title: "Quwah Zone - Calisthenics & Fitness",
        description: "Your ultimate guide to calisthenics, bodyweight workouts, and fitness transformation at home.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased font-sans`}>
                <ClientLayoutWrapper>
                    {children}
                </ClientLayoutWrapper>
            </body>
        </html>
    );
}
