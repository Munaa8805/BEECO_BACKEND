const mongoose = require("mongoose");
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Та нэрээ оруулна уу"],
    unique: true,
    trim: true,
    maxlength: [50, "Та хамгийн ихдээ 50 тэмдэгт нэртэй байна"]
  },
  Slug: String,
  description: {
    type: String,
    required: [true, "Та товч намтараа оруулна уу"],
    trim: true,
    maxlength: [500, "Та хамгийн ихдээ 500 тэмдэгт нэртэй байна"]
  },
  website: {
    type: String,
    match: [
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
      "Та өөрийн веб хаягийг оруулна уу"
    ]
  },
  phone: {
    type: String,
    maxlength: [20, "Таны утасны дугаар хамгийн ихдээ 10 тоо байна"]
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Та өөрийн e-mail хаягийг оруулна уу"
    ]
  },
  address: {
    type: String,
    required: [true, "Та хаягаа оруулна уу"]
  },
  // location: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //     index: "2dsphere"
  //   },
  //   formattedAddress: String,
  //   street: String,
  //   city: String,
  //   state: String,
  //   zipcode: String,
  //   country: String
  // },
  careers: {
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other"
    ]
  },
  averageRating: {
    type: Number,
    min: [1, "Та үнэлгээ өгнө үү, хамгийн багадаа 1"],
    max: [10, "Та үнэлгээ өгнө үү, хамгийн ихдээ 10"]
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  housing: {
    type: Boolean,
    default: false
  },
  jobAssistance: {
    type: Boolean,
    default: false
  },
  jobGuaranteee: {
    type: Boolean,
    default: false
  },
  acceptGi: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Bootcamp", BootcampSchema);
