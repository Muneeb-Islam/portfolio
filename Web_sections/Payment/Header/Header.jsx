import { s3baseUrl } from "@/config/config";
const Header = ({ page_data }) => {
    const salePage = page_data.sale_page_detail;
  const { brand_logo } = page_data;


  return (
    <header>

        <div className="container py-3">
        <a className="navbar-brand" href={salePage.brand_logo_link}>
              <img src={s3baseUrl + brand_logo} alt="" className="img-fluid" />
            </a>
            

       
      </div>
    </header>
  );
};

export default Header;
