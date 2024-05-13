import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Equal } from "typeorm";
export async function GETapartments(req, res) {
    const query_params = req.query;
    const { rooms, price } = query_params;
    if ((rooms && isNaN(parseInt(rooms))) ||
        (price && price !== "asc" && price !== "desc")) {
        res.statusCode = 400;
        res.json({
            msg: "Query params are of wrong types: rooms has to be a number, price has to be `asc` or `desc`",
        });
        return;
    }
    const where_clause = rooms ? { rooms: Equal(parseInt(rooms)) } : {};
    const order_clause = price
        ? {
            order: {
                price: (price === "asc" ? "ASC" : "DESC"),
            },
        }
        : {};
    try {
        const [apartments, count] = await AppDataSource.getRepository(Apartments).findAndCount({
            where: where_clause,
            ...order_clause,
        });
        res.statusCode = 200;
        res.json({ apartments, count });
    }
    catch (err) {
        console.log("Error retrieving data from DB", err);
    }
}
//# sourceMappingURL=GET.js.map