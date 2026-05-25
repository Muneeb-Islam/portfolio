import HeaderController from "@/Components/Header-Controller/HeaderController";
import "@/styles/globals.css";
import ProfFooter from "@/Web_pages/Home/ProfFooter";
import ProfHeader from "@/Web_pages/Home/ProfHeader";
import { SnackbarProvider } from "notistack";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ProfHeader />
        <HeaderController
          title="Muneeb Islam | SaaS, Web & Mobile App Developer"
          description="I build production-ready SaaS platforms, web apps, mobile apps, admin dashboards, backend APIs, and cloud deployments for startups and businesses."
          url="https://muneebislam.devflips.com/"
          image="https://muneebislam.devflips.com/og-image.jpg"
          fav_icon="/favicon.ico"
          keywords="Muneeb Islam, SaaS developer, web app developer, mobile app developer, full stack developer, React developer, Next.js developer, Node.js developer, admin dashboard developer, backend API developer, cloud deployment, startup MVP developer, software developer portfolio"
          author="Muneeb Islam"
          publisher="Muneeb Islam"
        />
        <Component {...pageProps} />
        <ProfFooter />
      </SnackbarProvider>
    </>
  );
}
