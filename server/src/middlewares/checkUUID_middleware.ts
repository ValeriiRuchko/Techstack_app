import { isUUID } from "class-validator";
import { NextFunction, Request, Response } from "express";

export default function checkUUID_middleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params as { id: string };

  console.log("middleware fired");

  const valid_uuid = isUUID(id, "all");
  if (!valid_uuid) {
    res.statusCode = 400;
    res.json({ msg: "Value provided is not valid UUID" });
    return;
  }
  next();
}
