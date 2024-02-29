import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "It is made most often from wheat flour, cooked on a flat or slightly concave iron griddle called a tawa.",
      description: "test",
      price: 100,
    },
    {
      name: "It is made most often from wheat flour, cooked on a flat or slightly concave iron griddle called a tawa.",
      description: "test",
      price: 300,
    },
    {
      name: "It is made most often from wheat flour, cooked on a flat or slightly concave iron griddle called a tawa.",
      description: "test",
      price: 100,
    },
  ];
 

  // const removeFromWishlistHandler = (data) => {
  //   dispatch(removeFromWishlist(data));
  // };

  // const addToCartHandler = (data) => {
  //   const newData = {...data, qty:1};
  //   dispatch(addTocart(newData));
  //   setOpenWishlist(false);
  // }

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col justify-between shadow-sm">
        {/* {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5>
          </div>
        ) : ( */}
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  3 items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cartData &&
                  cartData.map((i, index) => (
                    <CartSingle key={index} data={i} />
                  ))}
              </div>
            </div>
          </>
        {/* )} */}
      </div>
    </div>
  );
};

const CartSingle = ({data}) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"
        onClick={() => setOpenWishlist(false)} size={70}
        />
        <img
          src="https://www.eatsandretreats.com/travel/wp-content/uploads/2018/07/shutterstock_259149608.jpg"
          alt=""
          className="w-[100px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] pt-3 800px:pt-[3px] text-[17px] text-bg-[#3F1B11] font-Roboto">
            Lkr 100
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart"
           onClick={() => setOpenWishlist(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
