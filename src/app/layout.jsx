import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "900"],
});

export const metadata = {
  title: "HEXASHOP - Home",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
