import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { validate } from "class-validator";
import { Request, Response } from "express";

import type { ReqBody } from "../../@types/common_types.js";

export async function POSTapartments(req: Request, res: Response) {
  const { name, rooms, price, description } = req.body as ReqBody;

  const newApartment = new Apartments();
  newApartment.name = name;
  newApartment.rooms = rooms;
  newApartment.price = price;
  newApartment.description = description;

  const errors = await validate(newApartment);

  if (errors.length > 0) {
    res.statusCode = 400;
    const error_msgs = errors.map((validation_err) => {
      return validation_err.constraints;
    });

    res.json({
      msg: "Body you provided does not follow constraints",
      err: { error_msgs },
    });
  } else {
    try {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Apartments)
        .values([newApartment])
        .execute();

      res.statusCode = 200;
      res.json({
        msg: "Appartment was created",
        data: { name, rooms, price, description },
      });
    } catch (err: unknown) {
      console.log("Error trying to create a new record", err);
    }
  }
}
