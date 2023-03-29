import express from "express";
import cors from "cors";
import card_routes from "./routes/business-card.routes.js";
import { connectDb, disconnectDB } from "./config/database.js";

const app = express();
app
.use(cors())
.use(express.json())
.use(card_routes)
export async function init() {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
