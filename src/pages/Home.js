import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import SlideImg from "../components/SlideImg";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <SlideImg />
      <Hero />
      <FeaturedRooms />
    </React.Fragment>
  );
}
