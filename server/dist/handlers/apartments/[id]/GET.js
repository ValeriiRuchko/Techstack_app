import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
export async function GETapartment(req, res) {
    const { id } = req.params;
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
//# sourceMappingURL=GET.js.map