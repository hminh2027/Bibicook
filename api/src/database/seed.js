const { productPrototype } = require("../prototypes");
const { productService } = require("../services");
const { generateDummyData } = require("../utils");
const { prisma } = require("./prisma-client");

async function main() {
  // MEDIAS

  // PRODUCTS
  console.log("Seeding data... hold tight...");
  const products = generateDummyData(20, productPrototype);
  await prisma.product.deleteMany();
  // console.log(products);
  await productService.createMany(products);

  console.log("Put data inside baby!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
