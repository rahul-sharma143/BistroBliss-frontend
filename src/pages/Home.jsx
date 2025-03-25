import React from "react";
import NavBar from "../components/home/NavBar";
import Banner from "../components/home/Banner";
import Menu from "../components/home/Menu";
import AboutUs from "../components/home/AboutUs";
import Service from "../components/home/Service";
import UniqueService from "../components/home/UniqueService";
import Review from "../components/home/Review";
import Footer from "../components/elements/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <AboutUs />
      <UniqueService />
      <Service />
      <Review />
    </div>
  );
};

export default Home;
