import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { formatter, translateCondition } from "../../helpers";

const ResultsContent = results => {
  const { items } = results;

  return (
    <div className="resultings-products">
      {items !== ""
        ? items.map(item => (
            <Fragment key={item.id}>
              <div className="row result-row">
                <div className="co-4">
                  <div className="img-product">
                    <Link to={`/items/${item.id}`}>
                      <img src={item.picture} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-8">
                  <div className="price-and-description">
                    <div className="price-box">
                      <p className="price">
                        $ {formatter.format(item.price.amount)}
                        {item.free_shipping ? (
                          <span className="free-shipping">
                            <img src="./assets/img/ic_shipping.png" alt="" />
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                      <p className="location">{item.city}</p>
                    </div>
                    <div className="description">
                      <Link to={`/items/${item.id}`} className="description-text" key={`${item.id}-${item.title}`}>
                        {item.title}
                      </Link>

                      <p className="condition">{translateCondition(item.condition)}!</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </Fragment>
          ))
        : ""}
    </div>
  );
};

export default ResultsContent;
