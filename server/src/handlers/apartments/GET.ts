import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Request, Response } from "express";
import { Equal, FindOptionsOrderValue } from "typeorm";

type FiltersQParams = {
  price: "asc" & "desc";
  rooms: string;
};

export async function GETapartments(req: Request, res: Response) {
  const query_params: unknown = req.query;
  const { rooms, price } = query_params as FiltersQParams;

  // basic check of query_params in order to not get a db error
  if (
    (rooms && isNaN(parseInt(rooms))) ||
    (price && price !== "asc" && price !== "desc")
  ) {
    res.statusCode = 400;
    res.json({
      msg: "Query params are of wrong types: rooms has to be a number, price has to be `asc` or `desc`",
    });
    return;
  }

  const where_clause = rooms ? { rooms: Equal(parseInt(rooms)) } : {};
  // checking if we need to sort apartments in some order and if no, DB will return them
  // as they were inserted (essentially spread operator of empty object will add no new find opts)
  const order_clause = price
    ? {
        order: {
          price: (price === "asc" ? "ASC" : "DESC") as FindOptionsOrderValue,
        },
      }
    : {};

  const apartments = await AppDataSource.getRepository(Apartments).findAndCount(
    {
      where: where_clause,
      ...order_clause,
    },
  );
  res.statusCode = 200;
  res.json(apartments);
}
