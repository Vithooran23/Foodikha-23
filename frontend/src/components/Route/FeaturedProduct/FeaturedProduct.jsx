import React, { useEffect, useState  } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import {productData  } from "../../../static/data"


const FeaturedProduct = () => {
  // const {Products} = useSelector((state) => state.products);

  const [data, setData] = useState([]);
  useEffect(() => {
    // const allProductsData = allProducts ? [...allProducts] : [];
    const d = productData && productData .sort((a,b) => b.total_sell - a.total_sell); 
    const firstFour = d.slice(0, 4);
    setData(firstFour);
  }, []);;
   
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Our Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12 border-0">
        {
            // allProducts && allProducts.length !== 0 &&(
              <>
               {productData && productData.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            // )
           }
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
