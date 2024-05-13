import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
import { validate } from "class-validator";
export async function POSTapartments(req, res) {
    const { name, rooms, price, description } = req.body;
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
    }
    else {
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
        }
        catch (err) {
            console.log("Error trying to create a new record", err);
        }
    }
}
//# sourceMappingURL=POST.js.map