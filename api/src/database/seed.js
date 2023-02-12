const { prisma } = require("./prisma-client");

async function main() {
  // ROLES
  await prisma.roles.upsert({
    where: { id: 1 },
    update: { name: "admin" },
    create: {
      name: "admin",
    },
  });
  await prisma.roles.upsert({
    where: { id: 2 },
    update: { name: "user" },
    create: {
      name: "user",
    },
  });
  // ACCOUNTS
  await prisma.accounts.upsert({
    where: { username: "test" },
    update: {},
    create: {
      email: "test",
      username: "test",
      password: "123456",
      rolesId: 1,
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
