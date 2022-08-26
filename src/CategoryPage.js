import React from "react";
import Category from "./Category";
import "./CategoryPage.css";

function CategoryPage() {
  return (
    <div className="categoryPage">
      <div className="categoryPage__container">
        <div className="categoryPage__row">
          <Category title="Mobile" />
          <Category title="MBB" />
          <Category title="HRO" />
        </div>
        <div className="categoryPage__row">
          <Category title="Fixed" />
          <Category title="Outright" />
          <Category title="Addons" />
          <Category title="Prepaid" />
        </div>
      </div>
      <div className="footer hoverEmail" data-tool-tip="Click here to email">
        <a href="mailto:Varad.Ganjoo@team.telstra.com">
          Developed by Varad Ganjoo
        </a>
      </div>
    </div>
  );
}

export default CategoryPage;
