import { scrollToHash } from "@/utils/constants";
import Header from "@/Web-Layout/Header/Header";
import {
  AboutMe,
  BannerSection,
  Certification,
  GetInTouch,
  ImageSection,
  OurProjects,
  ReviewsSection,
  WorkExperiance,
} from "@/Web_sections/Home";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    scrollToHash();
  }, []);



  return (
    <div style={{
      backgroundColor: bgColor,
      transition: "background-color 0.5s ease",
    }}>
      <Header setBgColor={setBgColor} />
      <BannerSection setBgColor={setBgColor} />
      <AboutMe setBgColor={setBgColor} />
      <WorkExperiance setBgColor={setBgColor} />
      <OurProjects setBgColor={setBgColor} />
      <ReviewsSection setBgColor={setBgColor} />
      <Certification setBgColor={setBgColor} />
      <ImageSection setBgColor={setBgColor} />
      <GetInTouch setBgColor={setBgColor} />

    </div>
  );
}
