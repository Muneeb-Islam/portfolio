import {
  PlanPagePricing,
  PlanPageFaq,
  PlanPageSlider,
  PlanCompare,
} from "@/Web_sections/Plan-Page";
import React from "react";

export default function PlanPage() {
  return (
    <div className="plan-page">
      <PlanPagePricing />
      <PlanCompare />
      <PlanPageFaq />
      <PlanPageSlider />
    </div>
  );
}
