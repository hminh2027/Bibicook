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
const getProductBySlug = async (slug) => {
  return await prisma.products.findFirst({
    where: { slug },
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

const updateProductBySlug = async ({
  slug,
  name,
  shortDesc,
  longDesc,
  medias,
  categorySlug,
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
          slug: categorySlug,
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
const removeProductBySlug = async (slug) => {
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
  getProductBySlug,
  updateProductBySlug,
  removeProductBySlug,
};
