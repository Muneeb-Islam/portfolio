import "@/styles/globals.css";
import ProfFooter from "@/Web_pages/Home/ProfFooter";
import ProfHeader from "@/Web_pages/Home/ProfHeader";
export default function App({ Component, pageProps }) {
  return (
    <>
    <ProfHeader />
    <Component {...pageProps} />
    <ProfFooter />
    </>
  );
}
