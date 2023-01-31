const { prisma } = require("../database/prisma-client");
const { slugify } = require("../utils/slugify");

const getProducts = async () => {
  return await prisma.products.findMany();
};

const createProduct = async ({ name, price, desc, slug, updateBy }) => {
  const product = await prisma.products.create({
    data: {
      name,
      price,
      desc,
      slug: slugify(slug),
      updatedBy,
    },
  });
  return product;
};

module.exports = {
  getProducts,
  createProduct,
};
