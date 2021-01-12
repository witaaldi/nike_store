import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import { SizeSelector } from "../../components/SizeSelector/SizeSelector";
import { ColorSelector } from "../../components/ColorSelector/ColorSelector";
import Modal from "../../components/Modal/Modal";

//assets & services
import "./ProductDetail.css";
import { API, images } from "../../services";
import playIcon from "../../assets/icons/play-icon.svg";
import arrow from "../../assets/icons/small_long_right.svg";
import fs from "../../assets/icons/free-delivery.svg";

//redux
import ActionType from "../../redux/actions/actionType";

const ProductDetail = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  let { itemID } = useParams();
  const stringID = itemID.replace(/_/g, " ");

  const modal = useRef(null);
  const [item, setItem] = useState([]);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const getItem = () => {
    API.getShoesData(stringID).then((result) => {
      setItem(result);
      setIsLoaded(true);
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  let sizeToRender;
  if (item.sizes) {
    sizeToRender = item.sizes.map((sz) => {
      return (
        <SizeSelector
          value={sz.toString()}
          selected={size}
          text={sz}
          onChange={setSize}
          key={sz}
        />
      );
    });
  }

  let colorToRender;
  if (item.colors) {
    colorToRender = item.colors.map((clr) => {
      return (
        <ColorSelector
          value={clr.color_hash}
          selected={color}
          color={clr.color_hash}
          onChange={setColor}
          key={clr.name}
        />
      );
    });
  }

  const addToCart = (name, price, color, size) => {
    if (color !== "" && size !== "") {
      dispatch({
        type: ActionType.ADD_CART,
        payload: {
          id: itemID,
          name: name,
          price: price,
          color: color,
          size: size,
        },
      });
      alert(`${name} added successfully to the cart.`);
    } else {
      alert("You need to select size and color.");
    }
  };

  if (isLoaded) {
    return (
      <section>
        <div className="container">
          <div className="p-detail">
            <div className="p-images">
              <div className="p-big-img">
                <img src={images[itemID]} alt="Shoes" />
              </div>
              <ul className="p-small-imgs">
                <li>
                  <img src={images[itemID]} alt="Shoes" />
                </li>
                <li>
                  <img src={images[itemID]} alt="Shoes" />
                </li>
                <li>
                  <img src={images[itemID]} alt="Shoes" />
                </li>
                <li>
                  <img src={images[itemID]} alt="Shoes" />
                </li>
              </ul>
            </div>
            <div className="p-desc">
              <h2 className="p-category">{item.category}</h2>
              <h1 className="p-name">{item.name}</h1>
              <p className="p-about">{item.description}</p>
              <div className="p-video" onClick={() => modal.current.open()}>
                <div className="play-btn">
                  <img src={playIcon} alt="Play Video" />
                </div>
                <p>PLAY VIDEO</p>
              </div>
              <div className="p-size">
                <p>SELECT SIZE(US)</p>
                <div className="size-selector">{sizeToRender}</div>
              </div>
              <div className="p-color">
                <p>SELECT COLOR</p>
                <div className="color-selector">{colorToRender}</div>
              </div>
            </div>
          </div>
          <div className="add-to-bag">
            <div className="fs-note left">
              <img src={fs} alt="Free Shipping" />
              free shipping over $100 purchase
            </div>
            <div
              className="add-btn"
              onClick={() => addToCart(item.name, item.price, color, size)}
            >
              <p>add to bag — ${item.price}</p>
              <img src={arrow} alt="Add to Bag" />
            </div>
          </div>
        </div>
        <Modal ref={modal}>
          <div className="video-container">
            <iframe
              title={itemID}
              width="640"
              height="360"
              src={item.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
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

export default ProductDetail;
