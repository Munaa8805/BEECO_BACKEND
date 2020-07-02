const Bootcamp = require("../models/Bootcamp");
//// desc get all bootcamps
//// route Get /api/v1/bootcamps
//// access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, total: bootcamps.length, data: bootcamps });
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
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        data: req.params.id + "ийм ID дугаартай мэдээлэл байхгүй байна",
        message: err.message
      });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }
  // res
  //   .status(200)
  //   .json({ success: false, msg: `get bootcamp ${req.params.id}` });
};
//// desc Create a bootcamp
//// route POST  /api/v1/bootcamps
//// access Public
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }

  // console.log(req.body);
  // res.status(200).json({ success: false, msg: "create new bootcamp" });
};
//// desc Update a bootcamp
//// route PUT /api/v1/bootcamps/:id
//// access Public
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        data: req.params.id + "ийм ID дугаартай мэдээлэл байхгүй байна",
        message: err.message
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp
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
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message
    });
  }

  // res
  //   .status(200)
  //   .json({ success: false, msg: `delete bootcamp ${req.params.id}` });
};
