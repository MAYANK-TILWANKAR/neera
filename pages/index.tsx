"use client";
import React, { useEffect } from "react";
import ReviewSection from "../components/sections/reviews";
import ContactUs from "../components/sections/contactUs";
import NearbyAtraction from "../components/sections/nearby-atraction";
import Navbar from "../components/sections/Navbar";
import HomePage from "../components/sections/Home-Page";
import AboutUs from "../components/sections/AboutUs";
import Gallery from "../components/sections/Gallery";
import { Analytics } from "@vercel/analytics/react";
import NewServices from "../components/sections/newServices";

import Lenis from "@studio-freight/lenis";
import Footer from "../components/sections/Footer";

const Home: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="allOfTheAbove">
      <Navbar />
      <div className="overflow-y-hidden overflow-x-hidden bg-[#f5f5f5] ">
        <HomePage />
        <AboutUs />
        <div id="gallery">
          <Gallery />
        </div>
        <NewServices />
        <NearbyAtraction />
        <ReviewSection />
        <ContactUs />
        {/* <Analytics /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
