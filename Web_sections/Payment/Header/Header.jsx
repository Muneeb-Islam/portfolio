import PageTransitionBar from "@/Components/Loader/Loader";
import { s3baseUrl } from "@/config/config";
import { useState } from "react";
const Header = ({ page_data }) => {
  const salePage = page_data.page_detail;
  const { brand_logo } = page_data;

  return (
    <>
      <PageTransitionBar />
      <header className="payment-header-bttom">
        <div className="container py-3 text-center">
          <a className="navbar-brand" href={salePage?.brand_logo_link}>
            <img src={s3baseUrl + brand_logo} alt="" className="img-fluid" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
