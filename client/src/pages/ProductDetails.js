import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  // Initial product details
  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params.slug]);

  // Get products
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Layout title={"Product Details"}>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 text-center">
          <h1>Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Desription: {product.description}</h6>
          <h6>Price: {product.price}</h6>
          <h6>Category: {product.category.name}</h6>
        </div>
      </div>
      <div className="row">Similar Products</div>
    </Layout>
  );
};

export default ProductDetails;
