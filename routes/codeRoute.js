const { Router } = require("express");

const {
  saveCode,
  getCode,
  updateCode,
} = require("../controllers/codeControllers");

const codeRouter = Router();

codeRouter.post("/save-code", saveCode);

codeRouter.get("/get-code/:codeId", getCode);

codeRouter.put("/update-code/:codeId", updateCode);

module.exports = codeRouter;
