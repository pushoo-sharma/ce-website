"use client";
import { Providers } from "./providers";
import { Footer } from "@/components/ui/large-name-footer";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
import "../styles/index.css";

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script src=" https://hoox.s3.us-east-1.amazonaws.com/157d5fdb2e0f9ab3-classyendeavors.com-hoox.js" async></script>
      </head>

      <body className={`${poppins.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

