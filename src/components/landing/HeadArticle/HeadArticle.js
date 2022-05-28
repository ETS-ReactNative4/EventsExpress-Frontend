import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image1 from "../landing-images/1.jpg";
import image2 from "../landing-images/2.jpg";
import image3 from "../landing-images/3.jpg";
import image4 from "../landing-images/4.jpg";
import image5 from "../landing-images/5.jpg";
import image6 from "../landing-images/6.jpg";
import image7 from "../landing-images/7.jpg";
import image8 from "../landing-images/8.jpg";
import "./HeadArticle.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import constants from "../../../constants/HeadArticle";

const { BANNER_TEXT_1, BANNER_TEXT_2, BANNER_BUTTON_TEXT } = constants;
const imagesPreload = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const HeadArticle = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageChange = setInterval(() => {
      setCurrentImage(current =>
        current === imagesPreload.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => {
      clearInterval(imageChange);
    };
  }, []);

  return (
    <article className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h3 className="banner-text__quote1">{BANNER_TEXT_1}</h3>
          <h4 className="banner-text__quote2">{BANNER_TEXT_2}</h4>
        </div>
        <Link to="/home/events" className="banner-button" type="button">
          {BANNER_BUTTON_TEXT}
        </Link>
      </div>
      <div className="banner-img">
        <LazyLoadImage
          alt="background"
          effect="blur"
          src={imagesPreload[currentImage]}
        />
      </div>
    </article>
  );
};

export default HeadArticle;
