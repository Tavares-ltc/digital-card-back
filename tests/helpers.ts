import { prisma } from "../src/config/database.js";

export async function cleanDb() {
  await prisma.business_Card.deleteMany({});
}
