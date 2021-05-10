import { ReactComponent as Apple } from "./images/payment-apple.svg";
import { ReactComponent as Visa } from "./images/payment-visa.svg";
import { ReactComponent as Paypal } from "./images/payment-paypal.svg";
import EmptyCart from "./images/empty-cart.svg";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <header>
          <img src={EmptyCart} alt="empty-cart" className="empty-cart__image" />
          <h3 className="empty-cart__title">Your cart is empty</h3>
        </header>
      </section>
    );
  }
  return (
    <section className="checkout">
      <header className="cart__header">
        <h2 className="cart__title">shopping cart</h2>
        <span className="cart__explanation">
          You have {`${cart.length > 1 ? `${cart.length} items` : `1 item`}`} in
          your cart
        </span>
      </header>

      <div className="cart-wrapper">
        <div className="cart">
          {/* cart items */}
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </div>

        <div className="cart-total">
          <p className="total__header">
            Total <span className="small">(incl VAT)</span>
          </p>
          <p className="total__price">${total}</p>
          <hr className="total__seperator" />

          <div className="payment">
            <h4 className="payment__header">payment methods</h4>
            <div className="payment__group">
              <button className="payment__button">
                <Visa />
              </button>
              <button className="payment__button">
                <Paypal />
              </button>
              <button className="payment__button">
                <Apple />
              </button>
            </div>
            <button className="pay">Pay</button>
            <button className="remove" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
