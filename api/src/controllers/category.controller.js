const httpStatus = require("http-status");
const categoryService = require("../services/category.service");

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await categoryService.createCategory({ name });
    res.status(httpStatus.CREATED).json({
      message: "Tạo category thành công!",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(httpStatus.OK).json(categories);
  } catch (error) {
    next(error);
  }
};
const removeCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const removedCategory = await categoryService.removeCategory(slug);
    res.status(httpStatus.OK).json(removedCategory);
  } catch (error) {
    next(error);
  }
};
module.exports = { createCategory, getCategories, removeCategory };
