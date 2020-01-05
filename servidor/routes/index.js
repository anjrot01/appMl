const express = require("express");
const router = express.Router();

const SearchController = require("../controllers/search");
const SearchItemsController = require("../controllers/items");

router.get("/api/items", SearchController.getSearch);
router.get("/api/items/:id", SearchItemsController.getItems);
router.get("/api/items/category/:id", SearchItemsController.getItemCategory);

module.exports = router;
