import Header from "@/Web-Layout/Header/Header";
import Footer from "@/Web-Layout/Footer/Footer";

import {
  PlanPagePricing,
  PlanPageFaq,
  PlanPageSlider,
  PlanCompare,
} from "@/Web_sections/Plan-Page";
import React from "react";

export default function PlanPage({ result }) {
  console.log(result, "----result");
  const sale_page = result.web_page;
  const menu_items = result?.menu_items;
  const payment_plan = result.payment_plan;
  const plan_feature = result.plan_feature;
  const faq = result.faq;
  return (
    <div className="plan-page">
      <Header page_data={sale_page} />
      <PlanPagePricing page_data={sale_page} payment_plan={payment_plan} />
      <PlanCompare
        page_data={sale_page}
        payment_plan={payment_plan}
        plan_feature={plan_feature}
      />
      <PlanPageFaq page_data={sale_page} faq={faq} />
      {/* <PlanPageSlider /> */}
      <Footer page_data={sale_page} menu_items={menu_items} />
    </div>
  );
}
