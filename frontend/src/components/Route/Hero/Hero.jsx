import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { brandingData } from "../../../static/data";


const Hero = () => {
  return (
    <div
      className={`relative min-h-[60vh] 800px:min-h-[65vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url()",
      }}
    >
      <div className={`${styles.section} w-[30%] 800px:w-[60%] ${styles.noramlFlexx} `}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3F1B11] font-[600] capitalize`}
        >
          From our kitchen to  <br /> Your doorstep
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px] ">
                    Order Now
                 </span>
            </div>
        </Link>
      </div>
         

    </div>
    
    


  );
};

export default Hero;
