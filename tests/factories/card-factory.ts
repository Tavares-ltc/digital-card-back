import { prisma } from "../../src/config/database.js";
import BusinessCard from "../../src/types/card.types.js";

export function createBusinessCard({
  name,
  email,
  history,
  customURL,
  linkedin,
  github,
  tel,
}: BusinessCard) {
  return prisma.business_Card.create({
    data: {
      name,
      email,
      history,
      customURL,
      linkedin,
      github,
      tel
    },
  });
}
