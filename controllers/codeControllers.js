const { CodeModel } = require("../models/CodeModel");

module.exports.saveCode = async (req, res) => {
  const requestBody = req.body;

  try {
    const newCode = new CodeModel(requestBody);

    const response = await newCode.save();

    return res.status(201).json({
      success: true,
      message: "Code saved successfully",
      data: {
        code_id: response._id,
      },
    });
  } catch (error) {
    console.log("Failed to save code", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save code",
    });
  }
};

module.exports.getCode = async (req, res) => {
  const codeId = req.params.codeId;

  try {
    const response = await CodeModel.findById(codeId);

    if (!response)
      return res.status(404).json({
        success: false,
        message: "Failed to get code",
      });

    return res.status(200).json({
      success: true,
      message: "Successfully got the code",
      data: response,
    });
  } catch (error) {
    console.log("Failed to get code", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get code",
    });
  }
};

module.exports.updateCode = async (req, res) => {
  const { codeId } = req.params;
  const requestBody = req.body;

  try {
    const response = await CodeModel.findByIdAndUpdate(codeId, requestBody);

    if (!response)
      return res.status(404).json({
        success: false,
        message: "Failed to locate data",
      });

    return res.status(200).json({
      success: true,
      message: "Successfully updated the code",
      data: {
        code_id: response._id,
      },
    });
  } catch (error) {
    console.log("Failed to update code", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update code",
    });
  }
};
