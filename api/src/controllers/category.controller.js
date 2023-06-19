const httpStatus = require("http-status");
const categoryService = require("../services/category.service");
const { catchAsync } = require("../utils");

const createOne = catchAsync(async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.createOne({ name });
  res.status(httpStatus.CREATED).json({
    message: "Tạo thể loại thành công!",
    data: category,
  });
});

const getMany = catchAsync(async (req, res) => {
  const categories = await categoryService.getMany();
  res.status(httpStatus.OK).json({ data: categories });
});

const updateOneById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const category = await categoryService.updateOneById({ id, name });
  res.status(httpStatus.OK).json({
    message: "Cập nhật tên thể loại thành công!",
    data: category,
  });
});

const removeOneById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const removedCategory = await categoryService.removeOneById(id);
  res
    .status(httpStatus.OK)
    .json({ message: "Xoá thể loại thành công!", data: removedCategory });
});

module.exports = { createOne, getMany, updateOneById, removeOneById };
