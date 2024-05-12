import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Request, Response } from "express";
import { Equal } from "typeorm";

type FiltersQParams = {
  price: "asc" & "desc";
  rooms: number;
};

export async function GETapartments(req: Request, res: Response) {
  const query_params: unknown = req.query;
  const { rooms, price } = query_params as FiltersQParams;

  // ADD RUNTIME ERROR WITH STATUS 400
  // if (typeof rooms !== "number" || price !== "asc" || price !== "desc") {
  // }

  const where_clause = rooms ? { rooms: Equal(rooms) } : {};
  // FIX DEFAULT ORDERING
  const order_clause =
    price === "asc"
      ? { price: "ASC" }
      : price === "desc"
        ? { price: "DESC" }
        : {};

  const apartments = await AppDataSource.getRepository(Apartments).findAndCount(
    {
      where: where_clause,
      order: order_clause,
    },
  );
  res.statusCode = 200;
  res.json(apartments);
}
