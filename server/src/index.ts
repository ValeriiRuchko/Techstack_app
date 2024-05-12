// DB-imports
import "reflect-metadata";
import AppDataSource from "./db/data-source.js";
// request-handling-related-imports
import express from "express";

import { GETapartments } from "./handlers/apartments/GET.js";
import { POSTapartments } from "./handlers/apartments/POST.js";

// establishing connection to DB
try {
  await AppDataSource.initialize();
  console.log("DB-connection was established successfully");
} catch (err: unknown) {
  console.error("Failed to connect to database, error:", err);
}

const app = express();
// to parse json-body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT: number = +process.env.SERVER_PORT! || 3000;

app.route("/apartments").get(GETapartments).post(POSTapartments);

app.route("/apartments/:id").get().delete().put();

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port: ${SERVER_PORT}`);
});
