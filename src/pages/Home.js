import React from "react";
import Hero from "../components/Hero";
import FeaturedRooms from "../components/FeaturedRooms";
import SlideImg from "../components/SlideImg";

export default function Home() {
  return (
    <React.Fragment>
      <div className="test">
        <SlideImg />
      </div>
      <Hero />
      <FeaturedRooms />
    </React.Fragment>
  );
}
