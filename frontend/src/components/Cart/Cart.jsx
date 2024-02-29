import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {
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

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = Cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart Single Items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>

        {/* checkout buttons */}
        <div className="px-5 mb-3">
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#3F1B11] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now (Lkr 1080)
                  </h1>
                </div>
              </Link>
            </div>

        {/* )} */}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

    const decrement = (data) => {
      setValue(value === 1 ? 1 : value - 1);
      const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
      quantityChangeHandler(updateCartData);
    };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#3F1B11] border border-[#3F1B11] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#3F1B11] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#fff" />
          </div>
        </div>
        <img
          src="https://www.eatsandretreats.com/travel/wp-content/uploads/2018/07/shutterstock_259149608.jpg"
          alt=""
          className="w-[100px] h-min ml-2 mr-2 rounded-[10px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#3F1B11]">
            Lkr {data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#3F1B11] font-Roboto">
            Lkr{totalPrice}
          </h4>
        </div>
        <RxCross1
        size={70}
        className="cursor-pointer"
        onClick={() => setOpenCart(false)}
        color="[#3F1B11]"
          
        />
      </div>
    </div>
  );
  // };
};

export default Cart;
