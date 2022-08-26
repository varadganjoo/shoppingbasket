import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import PrintIcon from "@material-ui/icons/Print";
import DeleteAll from "@material-ui/icons/DeleteForever";
//uncomment all the commented lines to enable printing
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const printDocument = () => {
    window.print(document.getElementById("elem"));
    // alert("Printing is currently disabled");
  };

  const emptyBasket = () => {
    for (var i = 0; i < basket?.length; i++) {
      dispatch({
        type: "REMOVE_ALL",
      });
    }
  };

  const getUpgrade = (item) => {
    if (parseFloat(item.initial) < item.cost) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <div className="title__container">
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.length > 0 ? (
              <>
                {/* <div
                  className="checkout__printIcon hoverIcon"
                  data-tool-tip="Print Quote"
                >
                  <PrintIcon fontSize="large" onClick={printDocument} />
                </div> */}
                <div
                  className="clearBtn hoverIcon"
                  data-tool-tip="Remove All Items"
                >
                  <DeleteAll fontSize="large" onClick={emptyBasket} />
                </div>
              </>
            ) : null}
          </div>
          {basket?.map(function (item) {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                cost={item.cost}
                upgrade={getUpgrade(item)}
                index={item.index}
                initial={item.initial}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__rightContainer">
        <div className="checkout__right">
          <Subtotal />
        </div>
        {/* <div className="checkout__farRight">
                    <strong>Quick Links:</strong>
                    <Category title="Mobile" />
                    <Category title="MBB" />
                    <Category title="HRO" />
                    <Category title="Fixed" />
                    <Category title="Outright" />
                    <Category title="Addons" />
                </div> */}
      </div>
    </div>
  );
}

export default Checkout;
