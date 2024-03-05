import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import foodikha from "../../Assests/image/Foodikha_event.png"
import { useDispatch } from "react-redux";




const EventCard = ({ active, data }) => {
  // const { cart } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // const addToCartHandler = (data) => {
  //   const isItemExists = cart && cart.find((i) => i._id === data._id);
  //   if (isItemExists) {
  //     toast.error("Item already in cart!");
  //   } else {
  //     if (data.stock < 1) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       const cartData = { ...data, qty: 1 };
  //       dispatch(addTocart(cartData));
  //       toast.success("Item added to cart successfully!");
  //     }
  //   }
  // }
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
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              50 Lkr
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              35 lkr
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#d55b45]">
            33 sold
          </span>
        </div>
         <CountDown data={data} />
        <br /> 
        {/* <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
