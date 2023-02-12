const { prisma } = require("../database/prisma-client");
const { slugify } = require("../utils/slugify");

const getProducts = async ({ take, skip }) => {
  return await prisma.products.findMany({ take, skip });
};

const getProductById = async ({ id }) => {
  return await prisma.products.findUnique({ where: { id } });
};

const createProduct = async ({
  name,
  price,
  shortDesc,
  longDesc,
  createdBy,
  medias,
  categoryName,
}) => {
  const product = await prisma.products.create({
    data: {
      name,
      price,
      shortDesc,
      longDesc,
      slug: slugify(name),
      createdBy,
      Categories: {
        connect: {
          name: categoryName,
        },
      },
      ProductMedias: {
        createMany: {
          data: medias,
        },
      },
    },
  });
  return product;
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
};
