import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import ResultsContent from "./ResultsContent";

const Results = props => {
  return (
    <section className="search-reuslts">
      <div className="container results">
        <Breadcrumbs categories={props.resultado.data ? props.resultado.data.categories : ""} />
        <ResultsContent items={props.resultado.data ? props.resultado.data.items : ""} />
      </div>
    </section>
  );
};

export default Results;
