import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import Tumb from "../components/Tumb/Tumb";
import Tag from "../components/Tag/Tag";
import Collpase from "../components/Collapse/Collapse";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Wellcome() {
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    fetch(
      "/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setAppartments(data);
      });
  }, []);

  return (
    <div id="page-container">
      <div id="content-wrap">
        <div className="page">
          <Header />

          <div className="hero-banner">
            <div className="hero-banner-inner">
              <h1 className="heading-hero">Chez vous, partout et ailleurs</h1>
            </div>
          </div>

          <div className="content-container">
            {appartments &&
              appartments.map((appartment, index) => {
                return <Tumb appartment={appartment} key={index} />;
              })}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Wellcome;
