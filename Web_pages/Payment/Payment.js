import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe("your-publishable-key");
import {
  BannerSection,
  ContactSection,
  Footer,
  Header,
} from "@/Web_sections/Payment";

export default function PaymentPage({ page_data }) {
  const sale_page = page_data.web_page;
  const paymentPlan = page_data.payment_plan;
  const menu_items = page_data.menu_items;
  const stripKey = page_data?.stripe_publish_key;

  return (
    <div>
      <Header page_data={sale_page} />
      <BannerSection page_data={sale_page} />
      <Elements stripe={loadStripe(stripKey)}>
        <ContactSection page_data={sale_page} PaymentPlans={paymentPlan} />
      </Elements>
      <Footer page_data={sale_page} menu_items={menu_items} />
    </div>
  );
}
