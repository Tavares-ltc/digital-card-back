import { Request, Response } from "express";
import cardService from "../services/business-card.service.js";
import BusinessCard from "../types/card.types.js";
import {
  badRequestResponse,
  conflictResponse,
  createdResponse,
  notFoundRequestResponse,
  okResponse,
  serverErrorResponse,
} from "./controller.helper.js";

export async function createBusinessCard(req: Request, res: Response) {
  const { name, history, customURL, picture, linkedin, github, email, tel } =
    req.body;

  const businessCard: BusinessCard = {
    name,
    history,
    customURL,
    picture,
    linkedin,
    github,
    email,
    tel,
  };
  try {
    const card = await cardService.createBusinessCard(businessCard);
    return createdResponse(res, card);
  } catch (error) {
    if (error.name === "ConflictError") {
      return conflictResponse(res, error.message);
    }
    serverErrorResponse(res);
  }
}

export async function getBusinessCardByCustomURL(req: Request, res: Response) {
  const { customURL } = req.params;

  try {
    const businessCard = await cardService.getBusinessCardByCustomURL(customURL);
    okResponse(res, businessCard);
  } catch (error) {
    if (error.name === "RequestError") {
      return badRequestResponse(res);
    }
    if (error.name === "NotFoundError") {
      return notFoundRequestResponse(res, error.message);
    }
    serverErrorResponse(res);
  }
}
