import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Request, Response } from "express";

export async function GETapartment(req: Request, res: Response) {
  const { id } = req.params as { id: string };

  const apartment = await AppDataSource.getRepository(Apartments).findOneBy({
    id: id,
  });

  if (apartment !== null) {
    res.statusCode = 200;
    res.json(apartment);
  } else {
    res.statusCode = 200;
    res.json({ msg: "Apartment you're looking for doesn't exist" });
  }
}
