const httpStatus = require("http-status");
const productService = require("../services/product.service");

const getProducts = async (req, res, next) => {
  try {
    const products = await bannerService.createBanner({ url, fileName, size });
    res.status(httpStatus.CREATED).json({
      message: "Tạo banner thành công!",
      data: banner,
    });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, price, desc, slug } = req.body;
    const product = await productService.createProduct({
      name,
      price,
      desc,
      slug,
      updateBy: "abc",
    });

    res.status(httpStatus.CREATED).json({
      message: "Tạo sản phẩm mới thành công!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {};
