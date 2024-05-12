import "reflect-metadata";
import AppDataSource from "./db/data-source.js";
import express from "express";
import { GETapartments } from "./handlers/apartments/GET.js";
import { POSTapartments } from "./handlers/apartments/POST.js";
import { GETapartment } from "./handlers/apartments/[id]/GET.js";
import { DELETEapartment } from "./handlers/apartments/[id]/DELETE.js";
import checkUUID_middleware from "./middlewares/checkUUID_middleware.js";
import { UPDATEapartment } from "./handlers/apartments/[id]/PUT.js";
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
app.use("/apartments/:id", checkUUID_middleware);
const SERVER_PORT = +process.env.SERVER_PORT || 3000;
app.route("/apartments").get(GETapartments).post(POSTapartments);
app
    .route("/apartments/:id")
    .get(GETapartment)
    .delete(DELETEapartment)
    .put(UPDATEapartment);
app.listen(SERVER_PORT, () => {
    console.log(`Server started on port: ${SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map