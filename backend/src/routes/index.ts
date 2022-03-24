import { Express } from "express";
import { createToken, getAllTokens, getTokenById, getByMeter } from "./tokens";

export default function routes(app: Express) {
  app.get("/healthcheck", (_req, res) => res.sendStatus(200));

  

  app.get("/api/tokens", (req, res) => getAllTokens(req, res));

  // check if token is valid
  app.get("/api/tokens/:id", (req, res) => getTokenById(req, res));

  // by token
  app.post("/api/tokens", (req, res) => createToken(req, res));

  app.get("/api/check/:meterId", (req, res) => getByMeter(req, res));

}
