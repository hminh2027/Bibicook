const ProductFormatter = (product) => {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    permalink: product.permalink,
    description: product.description,
    shortDescription: product.short_description,
    categories: product.categories,
    images: product.images,
  };
};
export default ProductFormatter;
