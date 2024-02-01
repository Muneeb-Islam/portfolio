import { Box, LinearProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageTransitionBar = () => {
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();
  /* <<--------------------------------------------------------->> */
  const routeChangeStart = () => {
    setShowLoader(true);
  };
  const routeChangeComplete = () => {
    setShowLoader(false);
  };
  /* <<--------------------------------------------------------->> */
  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
    };
  }, []);
  /* <<--------------------------------------------------------->> */
  if (!showLoader) {
    return <></>;
  }
  return (
    <Box className="page-loading-bar">
      <LinearProgress
        color="primary"
        sx={{
          height: "0.12rem",
        }}
      />
    </Box>
  );
};
export default PageTransitionBar;
