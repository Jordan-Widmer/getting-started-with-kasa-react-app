import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Tag from "../components/Tag/Tag";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Collapse from "../components/Collapse/Collapse";
import Review from "../components/Review/Review";
import Avatar from "../components/UI-Elements/Avatar";
import { useParams } from "react-router-dom";
import NotFound from "../Pages/NotFound";

function Appartment() {
  const { id } = useParams();
  const [appartment, setAppartment] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(
      "/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const foundAppartment = data.filter((f) => f.id === id)[0];
        if (foundAppartment) {
          setAppartment(foundAppartment);
        } else {
          setNotFound(true);
        }
      });
    // eslint-disable-next-line
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <div id="page-container">
      <div id="content-wrap">
        <div className="page">
          <Header />
          <Carousel images={appartment ? appartment.pictures : []} />

          <div className="appartment-detail">
            <div className="appartmentdetail">
              <h2 className="heading-primary">
                {appartment && appartment.title}
              </h2>
              <h4 className="heading-secondary">
                {appartment && appartment.location}
              </h4>
              {appartment &&
                appartment.tags.map((tag, index) => {
                  return <Tag title={tag} key={index} />;
                })}
            </div>
            <div className="host-detail-container">
              <div className="host-detail">
                <p className="host-name">
                  {appartment && appartment.host.name}
                </p>
                <Avatar url={appartment ? appartment.host.picture : null} />
              </div>
              <Review stars={appartment ? appartment.rating : 0} />
            </div>
          </div>

          <div className="Testing">
            <Collapse title="Description">
              {appartment ? appartment.description : ""}
            </Collapse>

            <Collapse title="Equipment">
              {" "}
              {appartment &&
                appartment.equipments.map((equ) => <p key={equ}>{equ}</p>)}
            </Collapse>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Appartment;
