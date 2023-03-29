import { Router } from "express";
import { createBusinessCard, getBusinessCardByCustomURL } from "../controllers/business-card.controller.js";
import validateBody from "../middleware/validate-body.middleware.js";
import cardSchemas from "../schemas/card.schemas.js";
const route = Router();

route
.post("/card", validateBody(cardSchemas.create), createBusinessCard)
.get("/card/:customURL", getBusinessCardByCustomURL);

export default route;
