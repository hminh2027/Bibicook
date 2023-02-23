const httpStatus = require("http-status");
const { prisma } = require("../database/prisma-client");
const ApiError = require("../utils/api-error");
const { slugify } = require("../utils/slugify");
const getAttributes = async () => {
  const attributes = await prisma.attributes.findMany();
  return attributes;
};
const createAttribute = async (name) => {
  try {
    const isExist = await getAttributeByName(name);
    if (isExist)
      throw new ApiError(httpStatus.CONFLICT, "Attribute đã tồn tại");

    const attribute = await prisma.attributes.create({
      data: {
        name,
        slug: slugify(name),
      },
    });
    return attribute;
  } catch (e) {
    throw e;
  }
};
const getAttributeByName = async (name) => {
  return await prisma.attributes.findFirst({
    where: {
      name,
    },
  });
};
const removeAttribute = async (name) => {
  try {
    const attributeToRemove = await getAttributeByName(name);
    const attribute = await prisma.attributes.delete({
      where: { name: attributeToRemove.name },
    });
    return attribute;
  } catch (error) {
    throw new ApiError(httpStatus.NOT_MODIFIED, "Xoá attribute thất bại");
  }
};
module.exports = { createAttribute, getAttributes, removeAttribute };
