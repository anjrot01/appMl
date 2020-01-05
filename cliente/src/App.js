import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axiosClient from "./config/axios";
import Search from "./components/search/Search";
import Results from "./components/results/Results";
import ProductPage from "./components/results/ProductPage";

function App() {
  const [searchResults, setSearchResults] = useState({});

  const handleOnClick = async getSearch => {
    const getSearchFromApi = await axiosClient.get(`/api/items?q=${getSearch.query}`);
    const { data } = getSearchFromApi;

    setSearchResults({
      ...searchResults,
      data
    });
  };
  return (
    <Router>
      <Fragment>
        <Search manageOnClick={handleOnClick} />
        <Switch>
          <Route path="/items/:id" component={ProductPage} />
          <Route path="/items" render={() => <Results resultado={searchResults} />} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
