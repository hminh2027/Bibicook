const { prisma } = require("../database/prisma-client");
const { slugify } = require("../utils/slugify");

const getProducts = async ({ take, skip }) => {
  return await prisma.products.findMany({
    take,
    skip,
    include: {
      Attribute_values: {
        include: { Attributes: true },
      },
      Categories: true,
      ProductMedias: true,
    },
  });
};

const getProductById = async ({ id }) => {
  return await prisma.products.findUnique({
    where: { id },
    include: {
      Attribute_values: {
        include: {
          Attributes: true,
        },
      },
      Categories: true,
      ProductMedias: true,
    },
  });
};

const createProduct = async ({
  name,
  shortDesc,
  longDesc,
  createdBy,
  medias,
  categorySlug,
  attributes,
}) => {
  const product = await prisma.products.create({
    data: {
      name,
      shortDesc,
      longDesc,
      slug: slugify(name),
      createdBy,
      Categories: {
        connect: {
          slug: categorySlug,
        },
      },
      ProductMedias: {
        createMany: {
          data: medias.map((media, index) => ({
            mediasUrl: media.url,
            index,
          })),
        },
      },
      Attribute_values: {
        createMany: {
          data: attributes.map((attribute) => {
            return {
              attributesSlug: attribute.slug,
              value: attribute.value,
            };
          }),
          skipDuplicates: true,
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
