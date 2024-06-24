import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

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

export const metadata = {
  title: "NextJS Template",
  description: "NextJS Template",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
