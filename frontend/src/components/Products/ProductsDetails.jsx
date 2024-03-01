import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import styles from "../../styles/styles";
import foodi from "../../Assests/image/360_f_651167631_vnj4dfvps1yxytmzrgrvbsxujmzgstjw (1).jpg";
import { productData } from "../../static/data";
import { useSelector } from "react-redux";

const ProductsDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg =  totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);


  return (
    <div className="bg-white">
      {
      // data ? ( 

      <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
        <div className="w-full py-5">
          <div className="block w-full 800px:flex">
            <div className="w-full 800px:w-[50%]">
              <img
                // src={`${data.image_Url[0].url}`}
                src={foodi}
                alt="imaages"
                className="w-[80%] mt-10"
                onClick={() => setSelect(0)}
              />
              {/* <div className="w-full flex">
                <div
                  className={`${
                    select === 0 ? "border" : "null"
                  } cursor-pointer`}
                >
                  <img
                    src={foodi}
                    alt="Images"
                    className="h-[200px] overflow-hidden mr-3 mt-3"
                    onClick={() => setSelect(1)}
                  />
                </div>
              </div> */}
            </div>
            <div className="w-full 800px:w-[50%] pt-5">
              <h1 className={`${styles.productTitle}`}>
                History of dosa says they were made using only rice but with the
                passage of time
              </h1>
              <p>
                Product details are a crucial part of any eCommerce website or
                online marketplace. These details help the potential customers
                to make an informed decision about the product they are
                interested in buying. A well-written product description can
                also be a powerful marketing tool that can help to increase
                sales.Product details typically include information about the
                product's features, specifications, dimensions, weight,
                materials, and other relevant information that can help
                customers to understand the product better. The product details
                section should also include high-quality images and videos of
                the product, as well as customer reviews and ratings.
              </p>
              <div className="flex pt-3">
                <h4 className={`${styles.productDiscountPrice}`}>{35} Lkr</h4>
                <h3 className={`${styles.price}`}>
                  50 Lkr
                  {/* {data.originalPrice ? data.originalPrice + "$" : null} */}
                </h3>
              </div>

              <div className="flex items-center mt-12 justify-between pr-3">
                <div>
                  <button
                    className="bg-gradient-to-r from-[#824e3f] to-[#824e3f] text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-black font-medium px-4 py-[11px]">
                    {count}
                  </span>
                  <button
                    className="bg-gradient-to-r from-[#824e3f] to-[#824e3f] text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div>
                  {click ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer"
                      onClick={() => setClick(!click)}
                      color={click ? "#3F1B11" : "#3F1B11"}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer"
                      onClick={() => setClick(!click)}
                      title="Add to wishlist"
                    />
                  )}
                </div>
              </div>
              <div
                className={`${styles.button} mt-6 rounded-[2px] h-11 flex items-center`}
                onClick={() => addToCartHandler(data._id)}

              >
                <span className="text-[#fff] flex items-center">
                  Add to cart <AiOutlineShoppingCart className="ml-1" />
                </span>
              </div>
              <div className="flex items-center pt-8">
                <Link to={`/shop/preview/`}>
                  <img
                    src={`${foodi}`}
                    alt="Homemaker Image"
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                </Link>
                <div className="pr-8">
                  <Link to={`/shop/preview/`}>
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {/* {data.shop.name} */} Acchi Thosa
                    </h3>
                  </Link>
                  <h5 className="pb-3 text-[15px]">
                    {/* ({averageRating}/5)  */} 4.3 Ratings
                  </h5>
                </div>
                <div
                  className={`${styles.button} bg-[#824e3f] mt-4 !rounded !h-11`}
                  // onClick={handleMessageSubmit}
                >
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductDetailsInfo
          data={data}
          products={products}
          totalReviewsLength={totalReviewsLength}
          averageRating={averageRating}
        />
        <br />
        <br />
      </div>
    //  ): null
    } 
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Foodmaker Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Product details are a crucial part of any eCommerce website or
            online marketplace. These details help the potential customers to
            make an informed decision about the product they are interested in
            buying. A well-written product description can also be a powerful
            marketing tool that can help to increase sales.Product details
            typically include information about the product's features,
            specifications, dimensions, weight, materials, and other relevant
            information that can help customers to understand the product
            better. The product details section should also include high-quality
            images and videos of the product, as well as customer reviews and
            ratings.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Product details are a crucial part of any eCommerce website or
            online marketplace. These details help the potential customers to
            make an informed decision about the product they are interested in
            buying. A well-written product description can also be a powerful
            marketing tool that can help to increase sales.Product details
            typically include information about the product's features,
            specifications, dimensions, weight, materials, and other relevant
            information that can help customers to understand the product
            better. The product details section should also include high-quality
            images and videos of the product, as well as customer reviews and
            ratings.
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          <div className="w-full flex justify-center">
            {/* {data && data.reviews.length === 0 && ( */}
            <h5>No Reviews have for this product!</h5>
            {/* )} */}
          </div>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link to={`/shop/preview/`}>
              <div className="flex items-center">
                <img
                  src={`${foodi}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>Adchchi-Dosa</h3>
                  <h5 className="pb-2 text-[15px]">
                    {/* ({averageRating}/5) Ratings */} 4.3 Ratings
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">
              data-shop-description History of dosa says they were made using
              only rice but with the passage of time. History of dosa says they
              were made using only rice but with the passage of time.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500]">
                  {/* {data.shop?.createdAt?.slice(0, 10)} */}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  {/* {products && products.length} */}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">totalReviewsLength</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Home</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default ProductsDetails;
