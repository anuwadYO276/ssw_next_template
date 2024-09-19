"use client";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";

import "./styles/custom.css";
import "./styles/core.css";
import "./styles/theme-default.css";
import "./styles/demo.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== "/login" && <Header />}
        <main className="mt-3">
          <div className="container-fluid">
            {children}
          </div>
        </main>
        {/* {pathname !== "/login" && <Footer />} */}
      </body>
    </html>
  );
}
