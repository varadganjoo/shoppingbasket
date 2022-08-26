import React from "react";
import Data from "./prices/addons.json";
import Product from "./Product";
import "./Addons.css";

function Addons() {
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
                      type="fixed"
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
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/gaming/xbox-all-access/Xbox-All-Access.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Xbox All Access
          </a>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/cyber-security/cyber-security-plans/Telstra-Cyber-Security.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Cyber Security
          </a>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/personal/home-internet/telstra-bundles/nbn-High-Speed-Add-ons.pdf"
            rel="noreferrer"
            target="_blank"
          >
            NBN High Speed Addons
          </a>
        </p>
        <p>
          <a
            className="cis"
            href="https://www.telstra.com.au/content/dam/tcom/help/critical-information-summaries/business/telstra-business-services/telstra-business-tech-services/Telstra-Business-Tech-Services.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Telstra Business Tech Service
          </a>
        </p>
      </div>
    </div>
  );
}

export default Addons;
