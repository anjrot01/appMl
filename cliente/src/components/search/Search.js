import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo_ML.png";
import searhImg from "../../assets/img/ic_Search.png";

const Search = props => {
  const [getSearch, setSearch] = useState({
    query: ""
  });

  const handleChange = e => {
    setSearch({
      ...getSearch,
      [e.target.name]: e.target.value
    });
  };

  return (
    <header className="only-search">
      <div className="container search-holder">
        <span className="logo-search">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </span>
        <input type="text" className="meli-search" name="query" placeholder="Nunca dejes de buscar" onChange={handleChange} />
        <Link to={`/items?search=${getSearch.query}`} className="meli-search" onClick={() => props.manageOnClick(getSearch)}>
          <img src={searhImg} alt="" />
        </Link>
      </div>
    </header>
  );
};

export default Search;
