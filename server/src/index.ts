// DB-imports
import "reflect-metadata";
import AppDataSource from "./db/data-source.js";
// request-handling-related-imports
import express from "express";

import { GETapartments } from "./handlers/apartments/GET.js";
import { POSTapartments } from "./handlers/apartments/POST.js";
import { GETapartment } from "./handlers/apartments/[id]/GET.js";
import { DELETEapartment } from "./handlers/apartments/[id]/DELETE.js";
import checkUUID_middleware from "./middlewares/checkUUID_middleware.js";
import { UPDATEapartment } from "./handlers/apartments/[id]/PUT.js";

// establishing connection to DB
try {
  await AppDataSource.initialize();
  console.log("DB-connection was established successfully");
} catch (err: unknown) {
  console.error("Failed to connect to database, error:", err);
}

const app = express();
// Express built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// custom middlewares
app.use("/apartments/:id", checkUUID_middleware);

const SERVER_PORT: number = +process.env.SERVER_PORT! || 3000;

app.route("/apartments").get(GETapartments).post(POSTapartments);

app
  .route("/apartments/:id")
  .get(GETapartment)
  .delete(DELETEapartment)
  .put(UPDATEapartment);

app.listen(SERVER_PORT, () => {
  console.log(`Server started on port: ${SERVER_PORT}`);
});
