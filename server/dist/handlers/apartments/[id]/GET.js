import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
export async function GETapartment(req, res) {
    const { id } = req.params;
    try {
        const apartment = await AppDataSource.getRepository(Apartments).findOneBy({
            id: id,
        });
        if (apartment !== null) {
            res.statusCode = 200;
            res.json(apartment);
        }
        else {
            res.statusCode = 200;
            res.json({ msg: "Apartment you're looking for doesn't exist" });
        }
    }
    catch (err) {
        console.log("Error trying to retrieve a record", err);
    }
}
//# sourceMappingURL=GET.js.map