import BusinessCard from "../types/card.types.js";
import { v4 as uuidv4 } from "uuid";
import cardRepository from "../repositories/business-card.repository.js";
import { conflictError } from "../errors/conflict-error.js";
import { requestError } from "../errors/request-error.js";
import { notFoundError } from "../errors/not-found-error.js";


async function createBusinessCard(businessCard: BusinessCard) {
  if (!businessCard.customURL) {
    businessCard.customURL = uuidv4();
  }

  const anotherCard = await cardRepository.getBusinessCardByCustomURL(
    businessCard.customURL
  );

  if (anotherCard) {
    throw conflictError("Error: Custom URL already in use");
  }

  const card = await cardRepository.createBusinessCard(businessCard);

  return card;
}

async function getBusinessCardByCustomURL(customURL: string) {
  if (!customURL) {
    throw requestError(400, "Custom URL is necessary");
  }

  const businessCard = await cardRepository.getBusinessCardByCustomURL(
    customURL
  );

  if (!businessCard) throw notFoundError();

  return businessCard;
}

const cardService = {
  createBusinessCard,
  getBusinessCardByCustomURL
};

export default cardService;
