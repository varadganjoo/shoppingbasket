import React from "react";
import "./Category.css";
import { useHistory } from "react-router-dom";

function Category({ title }) {
  const history = useHistory();

  const changePage = () => {
    history.push(`/${title.toLowerCase()}`);
  };

  return (
    <button className="category" onClick={changePage}>
      <strong> {title} </strong>
    </button>
  );
}

export default Category;
