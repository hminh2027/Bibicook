const httpStatus = require("http-status");
const productService = require("../services/product.service");
const productFieldFormatter = require("../utils/product-field-format");
const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById({ id: +id });

    res.status(httpStatus.OK).json({
      data: productFieldFormatter.single(product),
    });
  } catch (error) {
    next(error);
  }
};
const getProductBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await productService.getProductBySlug(slug);

    res.status(httpStatus.OK).json(productFieldFormatter.single(product));
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
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
};

const createProduct = async (req, res, next) => {
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
};
const updateProductBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const { name, shortDesc, longDesc, medias, categorySlug, attributes } =
      req.body;

    const product = await productService.updateProductBySlug({
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
};
const removeProductBySlug = async (req, res, next) => {
  const { slug } = req.params;
  try {
    const result = await productService.removeProductBySlug(slug);
    res.status(httpStatus.OK).json({
      message: "Xoá sản phẩm thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductBySlug,
  updateProductBySlug,
  removeProductBySlug,
};
