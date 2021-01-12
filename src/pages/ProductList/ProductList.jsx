import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//assets & services
import "./ProductList.css";
import { API, images } from "../../services";

const ProductList = () => {
  let history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = () => {
    API.getShoesData().then((result) => {
      setItems(result);
      setIsLoaded(true);
      console.log(result);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleDetail = (id) => {
    history.push(`/product-detail/${id}`);
  };

  if (isLoaded) {
    return (
      <section>
        <div className="container">
          <h1>New Releases</h1>
          <div className="product-list">
            {items.map((item) => (
              <div className="product-item" key={item.name.replace(/ /g, "_")}>
                <div
                  className="product-img"
                  onClick={() => handleDetail(item.name.replace(/ /g, "_"))}
                >
                  <img src={images[item.name.replace(/ /g, "_")]} alt="Shoes" />
                </div>
                <div className="product-detail">
                  <p
                    className="name"
                    onClick={() => handleDetail(item.name.replace(/ /g, "_"))}
                  >
                    {item.name}
                  </p>
                  <p className="price">${item.price}</p>
                </div>
                <div className="product-category">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
};

export default ProductList;
