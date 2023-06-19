const checkUnique = async ({ model, data }) => {
  const object = await model.findFirst({ where: { ...data } });
  return object ? false : true;
};

module.exports = checkUnique;
