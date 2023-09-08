const httpStatus = require("http-status");
const productService = require("../services/product.service");
const { catchAsync } = require("../utils");

const getOneById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await productService.getOneById(id);

  res.status(httpStatus.OK).json({
    data: product,
  });
});

const getMany = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const products = await productService.getMany({ take: +limit, skip });
  res.status(httpStatus.OK).json({
    data: products,
    pagination: {
      page,
      total: products.length,
    },
  });
});

const createOne = catchAsync(async (req, res) => {
  const {
    name,
    shortDesc,
    longDesc,
    ingredients,
    nutrition,
    useAge,
    expiration,
    medias,
  } = req.body;

  const product = await productService.createOne({
    name,
    shortDesc,
    longDesc,
    ingredients,
    nutrition,
    useAge,
    expiration,
    medias,
  });

  res.status(httpStatus.CREATED).json({
    message: "Tạo sản phẩm mới thành công!",
    data: product,
  });
});

const updateOneById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    shortDesc,
    longDesc,
    ingredients,
    nutrition,
    useAge,
    expiration,
    medias,
  } = req.body;

  const product = await productService.updateOneById(id, {
    name,
    shortDesc,
    longDesc,
    ingredients,
    nutrition,
    useAge,
    expiration,
    medias,
  });

  res.status(httpStatus.OK).json({
    message: "Cập nhật sản phẩm thành công!",
    data: product,
  });
});

const removeOneById = catchAsync(async (req, res) => {
  const { id } = req.params;
  await productService.removeOneById(id);
  res.status(httpStatus.OK).json({
    message: "Xoá sản phẩm thành công!",
  });
});

module.exports = {
  getOneById,
  getMany,
  createOne,
  updateOneById,
  removeOneById,
};
