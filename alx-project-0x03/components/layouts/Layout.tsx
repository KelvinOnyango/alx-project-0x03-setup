// components/layouts/Layout.tsx
import React from "react";
import Head from "next/head"; // For managing document head content
import Header from "@/components/layout/Header"; // Assuming Header is part of the layout
import Footer from "@/components/layout/Footer"; // Assuming Footer is part of the layout
import { type LayoutProps } from "@/interfaces"; // Import the new LayoutProps interface

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "My Next.js App",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
