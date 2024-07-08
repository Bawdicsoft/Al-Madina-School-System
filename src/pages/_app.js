import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbars/Navbar";
import { SmallNavbar } from "@/components/navbars/SmallNavbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SmallNavbar /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
