import React from "react";
import Data from "./prices/prepaid.json";
import Product from "./Product";

function Prepaid() {
  const addons = Data;
  return (
    <div className="addons">
      <div className="addons__row">
        {addons.map(function (device) {
          return (
            <div className="addons__rowTwo">
              <h3>{device.brand}</h3>
              <div className="addons__rowThree">
                {device.devices.map(function (addon) {
                  return (
                    <Product
                      id={addon.id}
                      title={addon.title}
                      outright={null}
                      initial={addon.cost - addon.discount}
                      cost={addon.cost - addon.discount}
                      type="prepaid"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="addons__cis">
        <p>
          <strong>CIS:</strong>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/pre-paid/prepaid-mobile/Telstra-Pre-Paid-Mobile-Information.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Pre-Paid Mobile & Pre-Paid Casual CIS
          </a>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/pre-paid/prepaid-mobile-broadband-offers/Telstra-Pre-Paid-Mobile-Broadband.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Pre-Paid Mobile Broadband CIS
          </a>
        </p>
      </div>
    </div>
  );
}

export default Prepaid;
