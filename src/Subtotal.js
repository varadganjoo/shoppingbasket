import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();
  var price = getBasketTotal(basket).toFixed(2);

  const onGoingPrice = () => {
    basket?.map(function (item) {
      if (
        (item.id >= 1400 &&
          item.id <= 10500 &&
          (item.cost === item.outright || item.cost > 499)) ||
        (item.id >= 1000 && item.id <= 1002) ||
        (item.id >= 12000 && item.id <= 13700) ||
        item.id === 9201 ||
        item.id === 9202
      ) {
        price = price - item.cost.toFixed(2);
      }
    });
    return price;
  };

  const todayPrice = () => {
    basket?.map(function (item) {
      // if (item.id >= 500 && item.id <= 900 && item.booster) {
      //   price = price;
      // }
      // else if (item.id > 500 && item.newService) {
      //   price = price - 10;
      // }
    });
    return price;
  };

  return (
    <div className="subtotal">
      <div className="title">
        <p>
          Today's Price ({basket?.length}{" "}
          {basket?.length === 1 ? "item" : "items"}):{" "}
        </p>
      </div>
      <div className="cost">
        <small>$</small>
        <strong>{parseFloat(todayPrice()).toFixed(2)}</strong>
      </div>
      <div className="title">
        <p>Ongoing Monthly Price: </p>
      </div>
      <div className="cost">
        <small>$</small>
        <strong>{parseFloat(onGoingPrice()).toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default Subtotal;
