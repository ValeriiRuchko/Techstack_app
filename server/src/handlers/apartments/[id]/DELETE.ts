import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Request, Response } from "express";

export async function DELETEapartment(req: Request, res: Response) {
  const { id } = req.params as { id: string };

  await AppDataSource.getRepository(Apartments).delete({
    id: id,
  });

  res.statusCode = 200;
  res.json({ msg: "Apartment was successfully deleted", id });
}
