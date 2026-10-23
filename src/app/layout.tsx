import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tim Harseth",
  description:
    "Master student in Informatics with a specialization in Software Engineering at NTNU in Trondheim. Projects, skills and contact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${schibsted.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
