import "~/styles/globals.css";
import '@uploadthing/react/styles.css';

import { ClerkProvider } from '@clerk/nextjs';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from './api/uploadthing/core'; 

import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Concrete Hermanos",
  description: "Generated by dos hardworking bros",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans ${inter.variable} dark`}>
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
