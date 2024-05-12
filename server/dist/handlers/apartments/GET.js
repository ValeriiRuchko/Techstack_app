import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Equal } from "typeorm";
export async function GETapartments(req, res) {
    const query_params = req.query;
    const { rooms, price } = query_params;
    const where_clause = rooms ? { rooms: Equal(rooms) } : {};
    const order_clause = price === "asc"
        ? { price: "ASC" }
        : price === "desc"
            ? { price: "DESC" }
            : {};
    const apartments = await AppDataSource.getRepository(Apartments).findAndCount({
        where: where_clause,
        order: {
            price: price === "asc" ? "ASC" : "DESC",
        },
    });
    res.statusCode = 200;
    res.json(apartments);
}
//# sourceMappingURL=GET.js.map