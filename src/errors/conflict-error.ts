import { ApplicationError } from "../types/error.types.js";

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}
