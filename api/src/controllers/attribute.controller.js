const httpStatus = require("http-status");
const attributeService = require("../services/attribute.service");
const { catchAsync } = require("../utils");

const getAttributes = catchAsync(async (req, res, next) => {
  try {
    const attributes = await attributeService.getAttributes();
    res.status(httpStatus.OK).json(attributes);
  } catch (error) {
    next(error);
  }
});

const createAttribute = catchAsync(async (req, res, next) => {
  try {
    const { name } = req.body;
    const attribute = await attributeService.createAttribute(name);
    res
      .status(httpStatus.CREATED)
      .json({ message: "Tạo mới attribute thành công", data: attribute });
  } catch (error) {
    next(error);
  }
});
const deleteAttribute = catchAsync(async (req, res, next) => {
  try {
    const { name } = req.params;
    const attribute = await attributeService.deleteAttribute(name);
    req
      .status(httpStatus.OK)
      .json({ message: "Xoá attribute thành công", data: attribute });
  } catch (error) {
    next(error);
  }
});
module.exports = {
  createAttribute,
  getAttributes,
  deleteAttribute,
};
