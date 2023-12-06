import Footer from "@/Web-Layout/Footer/Footer";
import Header from "@/Web-Layout/Header/Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your-publishable-key");
import Animated from "../../Components/AnimatedComponent";
import { BannerSection, ContactSection } from "@/Web_sections/Payment";

export default function PaymentPage({ page_data }) {
  const sale_page = page_data.Sale_page;
  const menu_items = page_data.menu_items;

  console.log(page_data, --page_data);
  return (
    <div>
      <Header page_data={sale_page} />
      <BannerSection page_data={sale_page} />
      <Elements stripe={stripePromise}>
        <ContactSection page_data={sale_page} />
      </Elements>
      <Footer page_data={sale_page} menu_items={menu_items} />
      <Animated />
    </div>
  );
}
