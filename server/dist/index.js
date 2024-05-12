import "reflect-metadata";
import AppDataSource from "./db/data-source.js";
import express from "express";
import { GETapartments } from "./handlers/apartments/GET.js";
import { POSTapartments } from "./handlers/apartments/POST.js";
try {
    await AppDataSource.initialize();
    console.log("DB-connection was established successfully");
}
catch (err) {
    console.error("Failed to connect to database, error:", err);
}
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const SERVER_PORT = +process.env.SERVER_PORT || 3000;
app.route("/apartments").get(GETapartments).post(POSTapartments);
app.route("/apartments/:id").get().delete().put();
app.listen(SERVER_PORT, () => {
    console.log(`Server started on port: ${SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map