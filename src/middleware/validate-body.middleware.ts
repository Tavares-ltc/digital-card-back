import { NextFunction, Request, Response } from "express";
import { badRequestResponse } from "../controllers/controller.helper.js";
import Joi, { Schema } from "joi";
export default function validateBody(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const errors = error.details.map((d) => d.message);
      console.log(errors)
      return badRequestResponse(res, errors);
    }
    return next();
  };
}

