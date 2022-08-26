import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import mbb from "./pages/prices/mbbPlan.json";
import mobile from "./pages/prices/mobilePlan.json";
import fixed from "./pages/prices/fixedPlan.json";
import phone from "./pages/prices/outrightPhones.json";
import outMbb from "./pages/prices/outrightMbb.json";

function CheckoutProduct({ id, title, cost, index, initial }) {
  const [{ basket }, dispatch] = useStateValue();

  const i = basket.findIndex((basketItem) => basketItem.index === index);

  var months;
  //console.log(months);

  const removeFromBasket = () => {
    // remove item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      index: index,
    });
  };

  const addRemove = (state, value) => {
    if (state) {
      dispatch({
        type: "EDIT_PRICE",
        id: id,
        add: value,
        index: index,
      });
    } else {
      dispatch({
        type: "EDIT_PRICE",
        id: id,
        add: -value,
        index: index,
      });
    }
    return state;
  };

  const upgradeProtect = () => {
    basket[i].upgrade = addRemove(!basket[i].upgrade, 15);
  };

  const changePlan = (plan_id, data) => {
    const planCheck = data.findIndex(
      (planItems) => planItems.id === parseInt(plan_id)
    );

    var cost_2 = data[planCheck].cost;
    // if (data[planCheck].cost === cost && basket[i].booster) {
    //   cost = cost;
    // }

    // console.log(data[planCheck]);

    dispatch({
      type: "UPDATE_BASKET",
      id: data[planCheck].id,
      title: data[planCheck].title,
      cost:
        data[planCheck].id > 500 && data[planCheck].booster
          ? cost_2 - 10
          : cost_2,
      outright: 0,
      initial: cost_2,
      index: index,
    });
  };

  const changeHardware = (brand, data) => {
    months = Math.round(basket[i].outright / initial);
    const ind = brand.split(",");
    var price =
      basket[i].upgrade === true
        ? (data[ind[0]].devices[ind[1]].cost -
            data[ind[0]].devices[ind[1]].discount) /
            months +
          15
        : (data[ind[0]].devices[ind[1]].cost -
            data[ind[0]].devices[ind[1]].discount) /
          months;

    dispatch({
      type: "UPDATE_BASKET",
      id: data[ind[0]].devices[ind[1]].id,
      title: data[ind[0]].devices[ind[1]].title,
      cost: price,
      initial:
        (data[ind[0]].devices[ind[1]].cost -
          data[ind[0]].devices[ind[1]].discount) /
        months,
      outright:
        data[ind[0]].devices[ind[1]].cost -
        data[ind[0]].devices[ind[1]].discount,
      index: index,
    });
  };

  const showChange = () => {
    var data = null;

    if (id >= 100 && id <= 1300 && !(id >= 1000 && id <= 1099)) {
      if (id >= 100 && id <= 400) {
        data = mbb;
      } else if (id >= 500 && id <= 900) {
        data = mobile;
      } else if (id >= 1100 && id <= 1300) {
        data = fixed;
      }
      return (
        <select
          className="checkout__changeDropdown"
          onChange={(e) => changePlan(e.target.value, data)}
        >
          {data.map(function (plan) {
            return (
              <option
                className="options"
                selected={plan.title === title ? true : false}
                value={plan.id}
              >
                {plan.title}
              </option>
            );
          })}
        </select>
      );
    } else if (id >= 1400 && id <= 7100) {
      if (id >= 1400 && id <= 4600) {
        data = phone;
      } else if (id >= 4700 && id <= 7100) {
        data = outMbb;
      }
      var count = -1;
      return (
        <select
          className="checkout__changeDropdown"
          onChange={(e) => changeHardware(e.target.value, data)}
        >
          {data.map(function (allDevices) {
            count = count + 1;
            var count_2 = -1;
            return (
              <optgroup label={allDevices.brand}>
                {allDevices.devices.map(function (device) {
                  count_2 = count_2 + 1;
                  return (
                    <option
                      className="options"
                      selected={device.title === title ? true : false}
                      value={[count, count_2]}
                    >
                      {device.title}
                    </option>
                  );
                })}
              </optgroup>
            );
          })}
        </select>
      );
    }
  };

  const showCheckbox = () => {
    if (id >= 1400 && id <= 6400 && cost < basket[i].outright) {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={basket[i].upgrade}
              onChange={upgradeProtect}
              color="primary"
            />
          }
          label="Upgrade and Protect ( + $15)"
        />
      );
    } else if (id >= 600 && id <= 900 && basket[i].booster) {
      return (
        // <FormControlLabel
        //   control={
        //     <Checkbox
        //       checked={basket[i].booster}
        //       onChange={bizBooster}
        //       color="primary"
        //     />
        //   }
        //   label="Business Booster"
        // />
        <span>Business Booster Added!</span>
      );
    } else if (id >= 500 && id <= 900 && basket[i].newService) {
      return <span>New Service Discount Added!</span>;
    }
  };

  const showOutright = () => {
    if (id >= 1400 && id <= 7100 && cost !== basket[i].outright) {
      return (
        <span className="outright__cost">
          (<small>$</small>
          <strong>{parseFloat(basket[i].outright)}</strong>)
        </span>
      );
    }
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{basket[i].title}</p>
        <p className="checkoutProduct__price">
          <small> $</small>
          <strong>{parseFloat(basket[i].initial).toFixed(2)}</strong>
          {showOutright()}
        </p>
        <div className="checkout__upgrade">{showCheckbox()}</div>
        <div className="checkout__change">{showChange()}</div>
        <button className="checkout__remove" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
