import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { Request, Response } from "express";

export async function GETapartment(req: Request, res: Response) {
  const { id } = req.params as { id: string };

  try {
    const apartment = await AppDataSource.getRepository(Apartments).findOneBy({
      id: id,
    });

    if (apartment !== null) {
      res.statusCode = 200;
      res.json(apartment);
    } else {
      // abscence of apartment in DB isn't necessary an error, or at least isn't the one that has
      // to put an entire app down, as it can procede further,
      // thus I chose to use code 200 instead of 400 and just send a message about the result
      res.statusCode = 200;
      res.json({ msg: "Apartment you're looking for doesn't exist" });
    }
  } catch (err: unknown) {
    console.log("Error trying to retrieve a record", err);
  }
}
