import { prisma } from "../config/database.js";
import BusinessCard from "../types/card.types.js";

function getBusinessCardByCustomURL(customURL: string) {
  return prisma.business_Card.findFirst({ where: { customURL } });
}

function createBusinessCard(businessCard: BusinessCard) {
  return prisma.business_Card.create({
    data: businessCard,
  });
}

const cardRepository = {
  getBusinessCardByCustomURL,
  createBusinessCard
};
export default cardRepository;
