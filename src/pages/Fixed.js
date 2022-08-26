import React from "react";
import Data from "./prices/fixedPlan.json";
import Product from "./Product";

function Fixed() {
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
                type="fixed"
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
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/home-internet/telstra-bundles/Starter-Internet-Plan.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Starter Bundle CIS
            </a>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/home-internet/telstra-bundles/Core-Internet.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Core Bundle CIS
            </a>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/home-internet/telstra-bundles/Unlimited-Internet.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Unlimited Bundle CIS
            </a>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/home-internet/telstra-bundles/Premium-Internet.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Premium Bundle CIS
            </a>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/business/bundles/business-bundles/Unlimited-Business-Internet.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Business Bundle CIS
            </a>
          </p>
          <p>
            <a
              className="cis"
              href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/home-phone/telstra-home-phone-plans/Ultimate-Voice-Plan.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Ultimate Voice CIS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fixed;
