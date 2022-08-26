import React from "react";
import Data from "./prices/mbbPlan.json";
import Product from "./Product";
import "./Mbb.css";

function Mbb() {
  const plans = Data;

  return (
    <div className="mbb">
      <div className="mbbTwo">
        <div className="mbb__row">
          {plans.map(function (plan) {
            return (
              <Product
                id={plan.id}
                title={plan.title}
                cost={plan.cost - plan.discount}
                initial={plan.cost - plan.discount}
                upgrade={false}
                type="mbb"
                outright={null}
              />
            );
          })}
        </div>
        <div className="mbb__cis">
          <p>
            <strong>CIS:</strong>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/mobile-broadband/mobile-broadband-plans/Telstra---Upfront-Data-Plans.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Consumer CIS
            </a>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/business/mobile-broadband/business-mobile-broadband-plans/Business---Data-Plans.pdf"
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
    </div>
  );
}

export default Mbb;
