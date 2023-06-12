const httpStatus = require("http-status");
const categoryService = require("../services/category.service");
const { catchAsync } = require("../utils");

const createCategory = catchAsync(async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.createCategory({ name });
  res.status(httpStatus.CREATED).json({
    message: "Tạo category thành công!",
    data: category,
  });
});

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(httpStatus.OK).json(categories);
});

const removeCategory = catchAsync(async (req, res) => {
  const { slug } = req.params;
  const removedCategory = await categoryService.removeCategory(slug);
  res
    .status(httpStatus.OK)
    .json({ message: "Xoá thành công", data: removedCategory });
});

module.exports = { createCategory, getCategories, removeCategory };
