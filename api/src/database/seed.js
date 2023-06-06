const { prisma } = require("./prisma-client");

async function main() {
  // ACCOUNTS
  await prisma.accounts.upsert({
    where: { username: "test" },
    update: {},
    create: {
      email: "test",
      username: "test",
      password: "123456",
    },
  });
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
