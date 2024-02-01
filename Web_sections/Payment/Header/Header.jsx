import PageTransitionBar from "@/Components/Loader/Loader";
import { s3baseUrl } from "@/config/config";
import { useState } from "react";
const Header = ({ page_data }) => {
  const salePage = page_data.sale_page_detail;
  const { brand_logo } = page_data;

  return (
    <>
      <PageTransitionBar />
      <header>
        <div className="container py-3">
          <a className="navbar-brand" href={salePage.brand_logo_link}>
            <img src={s3baseUrl + brand_logo} alt="" className="img-fluid" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
