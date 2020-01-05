import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = cats => {
  const { categories } = cats;

  return (
    <div className="ml-breadcrumb">
      {categories !== ""
        ? categories.map((category, index) => (
            <Link to={`/items?search=${category}`} key={category + 1}>
              {category}
            </Link>
          ))
        : ""}
    </div>
  );
};

export default Breadcrumbs;
