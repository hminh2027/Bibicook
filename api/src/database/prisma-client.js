const { PrismaClient, Prisma } = require("@prisma/client");

module.exports.prisma = new PrismaClient();
module.exports.Prisma = Prisma;
