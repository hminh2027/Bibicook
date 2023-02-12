const single = (product) => {
  const formattedProduct = {
    id: product.id,
    slug: product.slug,
    shortDesc: product.shortDesc,
    longDesc: product.longDesc,

    attributes: product.Attribute_values.map((Attribute_value) => ({
      name: Attribute_value.Attributes.name,
      value: Attribute_value.value,
    })),
    category: product.Categories,
    medias: product.ProductMedias.map((ProductMedia) => ({
      url: ProductMedia.mediasUrl,
      index: ProductMedia.index,
    })),
  };
  return formattedProduct;
};
const multi = (products) => {
  return products.map((product) => single(product));
};

module.exports = {
  single,
  multi,
};
