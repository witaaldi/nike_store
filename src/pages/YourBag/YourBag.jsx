import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//assets
import bag from "../../assets/icons/shopping-bag.svg";
import arrow from "../../assets/icons/small_long_right.svg";
import { images } from "../../services";
import "./YourBag.css";

//redux
import ActionType from "../../redux/actions/actionType";

const YourBag = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state._bundle);
  const numberCart = useSelector((state) => state._bundle.numberCart);

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, qty) {
    return Number(price * qty).toLocaleString("en-US");
  }

  const removeItem = (name, key) => {
    if (window.confirm(`Remove ${name} from the cart?`)) {
      dispatch({ type: ActionType.DELETE_CART, payload: key });
    } else {
      return;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="title-with-icon">
          <h1>Your Bag</h1>
          <div className="bag-on-title">
            <img src={bag} alt="Your Bag" />
            <div className="bag-count">{numberCart}</div>
          </div>
        </div>
        {ListCart.length !== 0 ? (
          <div className="table-head">
            <div className="column-2"></div>
            <div className="column-10">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
          </div>
        ) : null}
        {ListCart.length !== 0 ? (
          ListCart.map((item, key) => {
            return (
              <div className="table-body" key={key}>
                <div className="column-2">
                  <div
                    className="remove-btn"
                    onClick={() => removeItem(item.name, key)}
                  >
                    x
                  </div>
                  <div className="item-img">
                    <img src={images[item.id]} alt="Item" />
                  </div>
                </div>
                <div className="column-10">
                  <div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-detail">
                      <div className="size">Size: {item.size}</div>
                      <div className="color">
                        Color
                        <div
                          className="color-box"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="item-price">
                    <span className="on-mobile-only">Price:</span> ${item.price}
                  </div>
                  <div>
                    <div className="item-qty">
                      <span className="on-mobile-only">Qty: </span>
                      {item.quantity}
                    </div>
                  </div>
                  <div className="item-sub-total">
                    ${TotalPrice(item.price, item.quantity)}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="find-btn">
            <Link to="/">
              <div className="pay-btn">
                <p>add product to cart</p>
                <img src={arrow} alt="Add to Bag" />
              </div>
            </Link>
          </div>
        )}
        {ListCart.length !== 0 ? (
          <div className="table-foot">
            <div className="foot-container">
              <div className="total-price">
                <p>TOTAL</p>
                <p className="bold">
                  ${Number(TotalCart).toLocaleString("en-US")}
                </p>
              </div>
              <div className="pay-btn">
                <p>pay now</p>
                <img src={arrow} alt="Add to Bag" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default YourBag;
