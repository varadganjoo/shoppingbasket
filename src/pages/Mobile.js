import React, { useState } from "react";
import Data from "./prices/mobilePlan.json";
import Product from "./Product";
import "./Mobile.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function Mobile() {
  const plans = Data;
  const [bizDiscount, setBizDiscount] = useState(false);
  const [newDiscount, setNewDiscount] = useState(false);

  const changeBizPrice = () => {
    setBizDiscount(!bizDiscount);
  };

  const changeNewPrice = () => {
    setNewDiscount(!newDiscount);
  };

  return (
    <div className="mobile">
      <div className="mobile__checkbox">
        <FormControlLabel
          control={<Checkbox color="primary" onChange={changeBizPrice} />}
          label="Business Booster"
        />
        {/* <FormControlLabel
          control={<Checkbox color="primary" onChange={changeNewPrice} />}
          label="New Service"
        /> */}
      </div>
      <div className="mobile__row">
        {plans.map(function (plan) {
          return (
            <Product
              id={plan.id}
              title={plan.title}
              cost={plan.cost}
              initial={parseFloat(plan.cost - plan.discount)}
              upgrade={false}
              type="mobile"
              booster={bizDiscount}
              newService={newDiscount}
              outright={null}
            />
          );
        })}
      </div>
      <div className="cis__row">
        <p>
          <strong>CIS:</strong>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/mobile/mobile-plans/Telstra-Upfront-Mobile-Plans.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Consumer CIS
          </a>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/business/mobile/business-mobile-plans/Business-Mobile-Plans.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Business CIS
          </a>
        </p>
        <a
          className="cis"
          href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/mobile/upgrade-and-protect/Upgrade-and-Protect.pdf"
          rel="noreferrer"
          target="_blank"
        >
          Upgrade and Protect
        </a>
      </div>
    </div>
  );
}

export default Mobile;
