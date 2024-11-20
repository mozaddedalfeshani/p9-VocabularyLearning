import React from "react";
import Banner from "../components/Banner";
import ImageSlider from "../components/Home/ImageSlider";
import AboutSection from "../components/Home/AboutSection";
import SuccessSection from "../components/Home/SuccessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";

export default function HomeLayout() {

  return (
    <div>
      <ImageSlider />
      <AboutSection />
      <SuccessSection />
      <TestimonialsSection />
      {/* <Banner /> */}
    </div>
  );
}
