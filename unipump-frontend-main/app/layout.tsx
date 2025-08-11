import { EvervaultCard } from "@/components/ui/evervault-card";
import MainLayout from "@/components/layout/MainLayout";
import "@coinbase/onchainkit/styles.css";
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from "next";
import { poppinsRounded } from './fonts/fonts';
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Unipump",
  description: "Unipump",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${poppinsRounded.variable} font-poppins antialiased`}
      >
        <Providers >
          {/* <div
            className="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(#ccc_0.5px,transparent_0.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_60%,transparent_100%)]"
          ></div> */}
          <EvervaultCard className="w-full max-h-screen h-full overflow-hidden" />
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
