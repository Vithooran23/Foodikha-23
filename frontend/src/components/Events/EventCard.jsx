import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import foodikha from "../../Assests/image/Foodikha_event.png"
import { useDispatch } from "react-redux";




const EventCard = ({ active, data }) => {
  
 
  return (
    <div
      className={`w-full block bg-white rounded-lg  lg:flex p-2 mb-12`}
    >
      <div className="w-full lg:-w[50%] m-auto"> 
        <img src={`${foodikha}`} alt="" className="filter drop-shadow-md md:drop-shadow-xl" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Make your Orders & get the delicious breakfast</h2>
        <p>Product details are a crucial part of our FOODIKHA website or online marketplace. 
          These details help the potential customers to make an informed decision about the product they are interested in buying.
           A well-written product description can also be a powerful marketing tool that can help to increase sales.
           Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
           </p>
       
        <br /> 
        <br /> 

         <CountDown data={data} />
        <br /> 
        
      </div>
    </div>
  );
};

export default EventCard;
