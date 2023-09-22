const { prisma } = require("../database/prisma-client");

const getMany = ({ take, skip }) => {
  return prisma.product.findMany({
    take,
    skip,
    orderBy: { views: "desc" },
  });
};

const getOneById = (id) => {
  return prisma.product.findUnique({
    where: { id },
    include: {
      Media: true,
    },
  });
};

const createOne = ({
  name,
  shortDesc,
  longDesc,
  ingredients,
  nutrition,
  useAge,
  expiration,
  medias,
}) => {
  return prisma.product.create({
    data: {
      name,
      shortDesc,
      longDesc,
      ingredients,
      nutrition,
      useAge,
      expiration,
      medias,
    },
  });
};

const createMany = (data) => {
  return prisma.product.createMany({ data });
};

const updateOneById = (
  id,
  {
    name,
    shortDesc,
    longDesc,
    ingredients,
    nutrition,
    useAge,
    expiration,
    medias,
  }
) => {
  return prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      shortDesc,
      longDesc,
      ingredients,
      nutrition,
      useAge,
      expiration,
      medias,
    },
  });
};

const removeOneById = (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  getMany,
  getOneById,
  createOne,
  createMany,
  updateOneById,
  removeOneById,
};
