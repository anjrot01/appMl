const { axiosServer } = require("../config/axios");

const getSearch = async (req, res) => {
  const { q } = req.query;

  const urlSearchML = `/sites/MLC/search?q=${q}&limit=4`;
  const urlCategoriesML = `/sites/MLC/category_predictor/predict?title=${q}`;

  const getSearchFromML = await axiosServer.get(urlSearchML);
  const getCategoriesFromML = await axiosServer.get(urlCategoriesML);
  const { results } = getSearchFromML.data;
  const { path_from_root } = getCategoriesFromML.data;

  const objresponse = results.map(async item => {
    const urlItems = `/items/${item.id}`;

    // Busco la imagen grande dentro del endpoint de productos
    const lookForItemImg = await axiosServer.get(urlItems);

    const itemImg = lookForItemImg.data.pictures[0].url;

    const resultItems = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0
      },
      picture: itemImg,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      city: item.seller_address.city.name
    };
    return resultItems;
  });

  const resultsCategories = path_from_root.map(item => item.name);

  const items = await Promise.all(objresponse);

  const responseToSearch = {
    author: {
      name: "Antonio",
      lastname: "Rodríguez"
    },
    categories: resultsCategories,
    items
  };

  res.send(responseToSearch);
};

module.exports = { getSearch };
