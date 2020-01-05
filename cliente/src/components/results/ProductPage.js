import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axios";
import Breadcrumbs from "./Breadcrumbs";
import { formatter, translateCondition } from "../../helpers";

const ProductPage = ({ location }) => {
  const [getItemsProduct, setItemsProduct] = useState();
  const [getCategory, setCategory] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const getProductDetails = await axiosClient.get(`/api${location.pathname}`);

      const getCategoryName = await axiosClient.get(`/api/items/category/${getProductDetails.data.item.catetory_id}`);

      setCategory(getCategoryName.data);

      setItemsProduct(getProductDetails.data);
    };
    getProduct();
  }, [location]);

  return (
    <section className="search-reuslts">
      <div className="container results">
        <div className="ml-breadcrumb">
          <Breadcrumbs categories={getCategory !== undefined ? getCategory : ""} />
        </div>
        {getItemsProduct !== undefined ? (
          <div className="product-page">
            <div className="product-deatails">
              <div className="row">
                <div className="col-8">
                  <div className="main-image">
                    <img src={getItemsProduct.item.picture} alt="" />
                  </div>
                  <div className="product-description">
                    <h2>Descripción del Producto</h2>
                    <p>{getItemsProduct.item.description}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-reference">
                    <div className="condition-stock">
                      <p>
                        {translateCondition(getItemsProduct.item.condition)} - {getItemsProduct.item.available_quantity} Restantes
                      </p>
                    </div>
                    <div className="title">
                      <h2>{getItemsProduct.item.title}</h2>
                    </div>
                    <div className="price-detail">
                      <p>$ {formatter.format(getItemsProduct.item.price.amount)}</p>
                    </div>
                    <button>Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ProductPage;
