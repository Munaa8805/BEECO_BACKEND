const ModelCRUD = require("../models/Model");
//// desc get all crudModels
//// route Get /api/v1/bootcamps
//// access Public
exports.getCrudModels = async (req, res, next) => {
  try {
    const models = await ModelCRUD.find();
    res.status(200).json({ success: true, total: models.length, data: models });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }
};
//// desc get single bootcamp
//// route Get /api/v1/bootcamps/:id
//// access Public
exports.getCrudModel = async (req, res, next) => {
  try {
    const model = await ModelCRUD.findById(req.params.id);
    if (!model) {
      return res.status(400).json({
        success: false,
        data: req.params.id + "ийм ID дугаартай мэдээлэл байхгүй байна",
        message: err.message
      });
    }
    res.status(200).json({ success: true, data: model });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }
};
//// desc Create a crud
//// route POST  /api/v1/bootcamps
//// access Public
exports.createCrudModel = async (req, res, next) => {
  try {
    const model = await ModelCRUD.create(req.body);
    res.status(201).json({
      success: true,
      data: model
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }
};
//// desc Update a bootcamp
//// route PUT /api/v1/bootcamps/:id
//// access Public
exports.updateCrudModel = async (req, res, next) => {
  try {
    const model = await ModelCRUD.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!model) {
      return res.status(400).json({
        success: false,
        data: req.params.id + "ийм ID дугаартай мэдээлэл байхгүй байна",
        message: err.message
      });
    }
    res.status(200).json({
      success: true,
      data: model
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }
};
//// desc Delete a bootcamp
//// route Delete  /api/v1/bootcamps/:id
//// access Public
exports.deleteCrudModel = async (req, res, next) => {
  try {
    const model = await ModelCRUD.findByIdAndDelete(req.params.id);
    if (!model) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }
    res.status(200).json({
      success: true,
      data: model
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }
};
