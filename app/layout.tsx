import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import LayoutProvider from "@/providers/LayoutProvider";
import GoogleTranslate from "@/components/GoogleTranslate";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "BVP",
  description: "BHARAT VIKAS PARISHAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.className} min-h-screen`}>
          <LayoutProvider>
            <GoogleTranslate />

            {children}</LayoutProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
