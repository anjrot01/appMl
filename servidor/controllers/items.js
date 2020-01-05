const { axiosServer } = require("../config/axios");

const getItems = async (req, res) => {
  const { id } = req.params;

  const searchItem = await axiosServer.get(`/items/${id}`);
  const searchDescription = await axiosServer.get(`items/${id}/description`);

  const itemData = searchItem.data;
  let itemDescription = searchDescription.data;
  itemDescription = itemDescription.plain_text.replace(/(\r\n|\n|\r)/gm, "");

  const resultItem = {
    author: {
      name: "Antonio",
      lastname: "Rodríguez"
    },
    item: {
      id: itemData.id,
      title: itemData.title,
      catetory_id: itemData.category_id,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
        decimals: 0
      },
      picture: itemData.pictures[0].url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: itemDescription,
      available_quantity: itemData.available_quantity
    }
  };

  res.send(resultItem);
};

const getItemCategory = async (req, res) => {
  const { id } = req.params;

  const searchCategory = await axiosServer.get(`/categories/${id}`);
  const { data } = searchCategory;

  const categoryList = data.path_from_root.map(cat => cat.name);

  res.send(categoryList);
};

module.exports = { getItems, getItemCategory };
