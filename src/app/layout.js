import { JetBrains_Mono } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/footer";

const sans = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Ni Batu",
  description: "Portfolio shayad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
