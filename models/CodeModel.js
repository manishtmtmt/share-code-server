const { Schema, model } = require("mongoose");

const CodeSchema = new Schema(
  {
    html: String,
    css: String,
    javascript: String,
  },
  { timestamps: true }
);

module.exports.CodeModel = model("code", CodeSchema);
