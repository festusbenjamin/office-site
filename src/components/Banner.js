import "./banner.css";
import React, { useEffect, useRef } from "react";
import { init } from 'ityped'

const Banner = () => {
  const textref = useRef();

  useEffect(() => {
    init(textref.current, 
      { showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Stunning Systems", "Beautiful Websites"] })
  }, []);

  return (
    <div className="banner">
      <div className="mask">
        <img className="banner-image" src="https://ld-wp73.template-help.com/wordpress/prod_15696/v4/wp-content/uploads/2019/09/image-new-design-3.jpg" alt="Doctor" />
      </div>
      <div className="content">
        <h3>Welcome to A Team</h3>
        <h1>We Develop <span ref={textref} /></h1>
      </div>
    </div>
  );
};
export default Banner;
