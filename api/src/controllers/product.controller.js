const httpStatus = require("http-status");
const productService = require("../services/product.service");
const productFieldFormatter = require("../utils/product-field-format");
const { catchAsync } = require("../utils");

const getProductById = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById({ id: +id });

    res.status(httpStatus.OK).json({
      data: productFieldFormatter.single(product),
    });
  } catch (error) {
    next(error);
  }
});

const getProducts = catchAsync(async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const products = await productService.getProducts({ take: +limit, skip });
    res.status(httpStatus.OK).json({
      data: productFieldFormatter.multi(products),
      pagination: {
        page,
        total: products.length,
      },
    });
  } catch (error) {
    next(error);
  }
});

const createProduct = catchAsync(async (req, res, next) => {
  try {
    const { name, shortDesc, longDesc, medias, categorySlug, attributes } =
      req.body;
    const { username } = req.user;

    const product = await productService.createProduct({
      name,
      shortDesc,
      longDesc,
      createdBy: username,
      medias,
      categorySlug,
      attributes,
    });

    res.status(httpStatus.CREATED).json({
      message: "Tạo sản phẩm mới thành công!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
});

const updateProductById = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, shortDesc, longDesc, medias, categorySlug, attributes } =
      req.body;

    const product = await productService.updateProductById({
      slug,
      name,
      shortDesc,
      longDesc,
      medias,
      categorySlug,
      attributes,
    });

    res.status(httpStatus.OK).json({
      message: "Cập nhật sản phẩm thành công!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
});

const removeProductById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await productService.removeProductById(id);
    res.status(httpStatus.OK).json({
      message: "Xoá sản phẩm thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  removeProductById,
};
