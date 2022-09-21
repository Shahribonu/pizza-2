import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty<span>😕</span>
    </h2>
    <p>
      You haven't ordered any pizza yet.
      <br />
      To order pizza ,move to main page
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Go Back</span>
    </Link>
  </div>
);
