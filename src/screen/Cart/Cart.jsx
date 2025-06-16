import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/Action.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/Actions/Action.jsx";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  let a = 0;
  let cost = cartItems.map((item) => {
    return (a = a + item.price);
  });

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    toast.error("Item Removed From Cart", {
      position: "bottom-right",
    });
    dispatch(removeFromCart(id));
  };

  const handleProceedToBuy = () => {
    toast.success("Your order is placed", {
      position: "bottom-right",
    });
    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="desellectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {cartItem.map((item, ind) => {
            return (
              <div className="cartItemBlock">
                <div className="cartItemLeftBlock">
                  <div className="cartItemLeftBlockImage">
                    <img
                      className="cartItemLeftBlockImg"
                      src={item.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="cartItemLeftBlockDetails">
                    <div className="cartItemProductName">{item.name}</div>
                    <div className="inStockCart">In stock</div>
                    <div className="elgFreeShp ">
                      Eligible for FREE Shipping
                    </div>
                    <div className="amazonFullFilledImage">
                      <img
                        className="fullfillImg"
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="removeFromCart"
                      onClick={() => {
                        handleRemoveFromCart(item.id);
                      }}
                    >
                      Remove from Basket
                    </div>
                  </div>
                </div>

                <div className="cartItemRightBlock">Rs {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItem.length} items) :
          <span className="subTotalTitleSpan">Rs {a}</span>
        </div>
        <div className="giftAddto">
          <input type="checkbox" />
          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedToBuy" onClick={handleProceedToBuy}>
          Proceed To Buy
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
