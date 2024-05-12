import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { validate } from "class-validator";
import { Request, Response } from "express";

import { ReqBody } from "../../../@types/common_types.js";

export async function UPDATEapartment(req: Request, res: Response) {
  const { id } = req.params as { id: string };
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
    await AppDataSource.getRepository(Apartments).update(
      { id: id },
      newApartment,
    );

    res.statusCode = 200;
    res.json({
      msg: "Appartment was updated",
      data: { name, rooms, price, description },
    });
  }
}
