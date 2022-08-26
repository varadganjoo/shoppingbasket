import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";
import { useHistory } from "react-router-dom"; //installed
import { toast } from "react-toastify"; //installed
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Product({
  id,
  title,
  cost,
  hro,
  type,
  initial,
  newService,
  booster,
  outright,
  upgrade,
  original,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  if (
    id === 7500 ||
    id === 7401 ||
    id === 10300 ||
    id === 9300 ||
    id === 9100 ||
    id === 7600 ||
    id === 7601 ||
    (id >= 8800 && id <= 9000) ||
    (id >= 1000 && id <= 1002) ||
    id === 9201 ||
    id === 9202 ||
    id === 7400 ||
    (id >= 1000 && id <= 1004) ||
    original >= 1700
  ) {
    if (id >= 1400 && id <= 6400 && upgrade) {
      initial = (cost - 15).toFixed(2);
    } else {
      initial = cost;
    }
  } else if (id >= 6500 && id <= 7100) {
    cost = parseFloat(initial);
  } else if (id >= 500 && id <= 900 && booster) {
    cost = (initial - 10).toFixed(2);
  }

  // const addUpgrade = (id) => {
  //   var upgradeBool = false;
  //   if (id >= 1400 && id <= 6400) {
  //     upgradeBool = initial < parseFloat(cost);
  //   }
  //   return upgradeBool;
  // };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        index: basket?.length + 1,
        title: title,
        cost: parseFloat(cost),
        upgrade: upgrade,
        initial: initial,
        booster: booster,
        newService: newService,
        outright: outright,
      },
    });

    toast(title, {
      draggablePercent: 60,
      autoClose: 1000,
      hideProgressBar: true,
    });

    if (hro === true) {
      history.push("/hro");
    } else if (window.location.pathname === "/hro") {
      history.push("/hro");
    } else {
      switch (type) {
        case "mobile":
          history.push("/addPhone");
          break;
        case "mbb":
          history.push("/addMbb");
          break;
        case "outright":
          history.push("/outright");
          break;
        case "fixed":
          history.push("/addons");
          break;
        case "prepaid":
          history.push("/prepaid");
          break;
        default:
          history.push("/");
      }
    }
  };

  const showOutright = () => {
    if (outright !== null && parseInt(outright) !== parseInt(initial)) {
      return (
        <span className="outright__cost">
          (<small>$</small>
          <strong>{parseFloat(outright).toFixed(2)}</strong>)
        </span>
      );
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>{original >= 1700 ? "No 36 months option" : null}</small>
        <p className="product__cost">
          <small>$</small>
          <strong>{parseFloat(initial)}</strong>
        </p>
        <p className="product__costOutright">{showOutright()}</p>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
