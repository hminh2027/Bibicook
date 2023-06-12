import { faker } from "@faker-js/faker";
// Generate a random product ID
const generateProductId = () => faker.datatype.uuid();

// Generate a random product name
const generateProductName = () => faker.commerce.productName();

// Generate a random long description
const generateLongDescription = () => faker.lorem.paragraphs();

// Generate a random short description
const generateShortDescription = () => faker.lorem.sentence();

// Generate a random date in ISO format
const generateRandomDate = () => faker.date.past().toISOString();

// Generate mock data for a single product
const generateMockProduct = () => ({
  id: generateProductId(),
  name: generateProductName(),
  longDesc: generateLongDescription(),
  shortDesc: generateShortDescription(),
  createdAt: generateRandomDate(),
  updatedAt: generateRandomDate(),
});

// Generate mock data for multiple products
const generateMockProducts = (count: number) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = generateMockProduct();
    products.push(product);
  }
  return products;
};

export { generateMockProducts, generateMockProduct };
