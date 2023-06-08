const { prisma } = require("../database/prisma-client");

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
  categoryId,
  attributes,
}) => {
  const product = await prisma.products.create({
    data: {
      name,
      shortDesc,
      longDesc,
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

const updateProductById = async ({
  slug,
  name,
  shortDesc,
  longDesc,
  medias,
  categoryName,
  attributes,
}) => {
  const productToUpdate = await getProductBySlug(slug);
  return await prisma.products.update({
    where: {
      slug: productToUpdate.slug,
    },
    data: {
      name,
      shortDesc,
      longDesc,
      Categories: {
        connect: {
          slug: categoryName,
        },
      },
      ProductMedias: {
        upsert: medias.map((media, index) => ({
          where: {
            productsId_index: {
              productsId: productToUpdate.id,
              index: index,
            },
          },
          update: {
            Medias: {
              connect: {
                url: media.url,
              },
            },
          },
          create: {
            Medias: {
              connect: {
                url: media.url,
              },
            },
            index,
          },
        })),
      },
      Attribute_values: {
        upsert: attributes.map((attribute) => ({
          where: {
            productsId_attributesSlug: {
              attributesSlug: attribute.slug,
              productsId: productToUpdate.id,
            },
          },
          create: {
            Attributes: {
              connect: {
                slug: attribute.slug,
              },
            },
            value: attribute.value,
          },
          update: {
            Attributes: {
              connect: {
                slug: attribute.slug,
              },
            },
            value: attribute.value,
          },
        })),
      },
    },
  });
};

const removeProductById = async (slug) => {
  const productToRemove = await getProductBySlug(slug);
  await prisma.productMedias.deleteMany({
    where: {
      productsId: productToRemove.id,
    },
  });
  await prisma.attribute_values.deleteMany({
    where: {
      productsId: productToRemove.id,
    },
  });
  return await prisma.products.delete({
    where: {
      slug,
    },
  });
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  removeProductById,
};
