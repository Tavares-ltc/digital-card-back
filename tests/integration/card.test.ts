import app, { init } from "../../src/app.js";
import { describe, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";
import supertest from "supertest";
import { createBusinessCard } from "../factories/card-factory.js";
import { cleanDb } from "../helpers.js";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("GET /CARD", () => {
  it("should respond with status 404 if no custom URL is given", async () => {
    const response = await server.get("/card");

    expect(response.status).toBe(404);
  });

  it("should respond with status 404 if given custom URL not exist", async () => {
    const customURL = faker.lorem.word();

    const response = await server.get(`/card/${customURL}`);

    expect(response.status).toBe(404);
  });

  describe("when custom URL is valid", () => {
    it("should respond with status 200 if URL exists ", async () => {
      const name = faker.name.firstName();
      const email = faker.internet.email();
      const history = faker.lorem.words();
      const customURL = faker.lorem.word();
      await createBusinessCard({
        name,
        email,
        history,
        customURL,
      });

      const response = await server.get(`/card/${customURL}`);

      expect(response.status).toEqual(200);
    });
  });
});

describe("POST /CARD", () => {
  it("should respond with status 400 if no name is given", async () => {
    const email = faker.internet.email();
    const history = faker.lorem.words();
    const invalidBody = {
      email,
      history,
    };
    const response = await server.post("/card").send(invalidBody);

    expect(response.status).toBe(400);
  });

  it("should respond with status 400 if no email is given", async () => {
    const name = faker.name.firstName();
    const history = faker.lorem.words();
    const invalidBody = {
      name,
      history,
    };
    const response = await server.post("/card").send(invalidBody);

    expect(response.status).toBe(400);
  });

  it("should respond with status 400 if no history is given", async () => {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const invalidBody = {
      name,
      email,
    };
    const response = await server.post("/card").send(invalidBody);

    expect(response.status).toBe(400);
  });

  describe("when body is valid", () => {
    it("should respond with status 201 a valid body is given", async () => {
      const name = faker.name.firstName();
      const email = faker.internet.email();
      const history = faker.lorem.words();
      const validBody = {
        name,
        email,
        history,
      };
      const response = await server.post("/card").send(validBody);

      expect(response.status).toBe(201);
    });
    it("should respond with status 409 when the custom URL is already in use", async () => {
      const name = faker.name.firstName();
      const email = faker.internet.email();
      const history = faker.lorem.words();
      const customURL = faker.lorem.word();
      await createBusinessCard({
        name,
        email,
        history,
        customURL,
      });
      const response = await server
        .post("/card")
        .send({ name, email, history, customURL });
      expect(response.status).toEqual(409);
    });
  });
});
