import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
export async function DELETEapartment(req, res) {
    const { id } = req.params;
    const apartment = await AppDataSource.getRepository(Apartments).delete({
        id: id,
    });
    console.log(apartment);
    res.statusCode = 200;
    res.json({ msg: "Apartment was successfully deleted", id });
}
//# sourceMappingURL=DELETE.js.map