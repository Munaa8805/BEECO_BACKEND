const mongoose = require("mongoose");
const CRUDSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Та нэрээ оруулна уу"],
    trim: true,
    maxlength: [50, "Та хамгийн ихдээ 50 тэмдэгт нэртэй байна"]
  },
  Slug: String,
  lastname: {
    type: String,
    required: [true, "Та овогоо оруулна уу"],
    trim: true,
    maxlength: [50, "Та хамгийн ихдээ 50 тэмдэгт нэртэй байна"]
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [8, "Таны утасны дугаар хамгийн ихдээ 8 тоо байна"]
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
    required: [true, "Та оршин суугаа хаягаа оруулна уу"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("ModelCRUD", CRUDSchema);
