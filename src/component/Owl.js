import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./Owl.module.css"

//img
import slider1 from "../images/slider1.jpg"
import slider2 from "../images/slider2.jpg"
import slider3 from "../images/slider3.jpg"

const Owl = () => {
    const options = {
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true
      };
    return (
        <OwlCarousel className={`owl-theme ${styles.Container}`} {...options}>
        <div className="item">
          <img className={styles.pic}
            src={slider1}
            alt="road"
          />
        </div>
        <div className="item">
          <img className={styles.pic}
            src={slider2}
            alt="sunrise"
          />
        </div>
        <div className="item">
          <img className={styles.pic}
            src={slider3}
            alt="road2"
          />
        </div>
      </OwlCarousel>
    );
};

export default Owl;