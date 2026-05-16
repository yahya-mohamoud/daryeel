import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Daryeel Charity and Rural Development",
  description: "Empowering rural communities in Somalia and East Africa through humanitarian aid, education, and healthcare.",
  openGraph: {
    title: "Daryeel Charity and Rural Development",
    description: "Empowering rural communities in Somalia and East Africa.",
    type: "website",
    locale: "en_US",
    siteName: "Daryeel Charity",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
