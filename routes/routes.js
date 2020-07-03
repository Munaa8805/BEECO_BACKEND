const express = require("express");
const router = express.Router();
const {
  getCrudModel,
  getCrudModels,
  createCrudModel,
  updateCrudModel,
  deleteCrudModel
} = require("../controllers/Controls");

///// router
router
  .route("/")
  .get(getCrudModels)
  .post(createCrudModel);
router
  .route("/:id")
  .get(getCrudModel)
  .put(updateCrudModel)
  .delete(deleteCrudModel);
module.exports = router;
