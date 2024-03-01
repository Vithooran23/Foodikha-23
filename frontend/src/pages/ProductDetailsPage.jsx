import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductsDetails from "../components/Products/ProductDetailsCopy";
import { productData } from "../static/data";
import SuggestedProduct  from "../components/Products/SuggestedProduct";




const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const productName = name.replace(/-/g,"");


  useEffect(() => {
   
      const data = productData.find((i) => i.name === productName);
      setData(data);
    
  
  }, []);



  return (
    <div>
      <Header />
      <ProductsDetails data={data} />
      {
        data && <SuggestedProduct data={data} />
      }
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
