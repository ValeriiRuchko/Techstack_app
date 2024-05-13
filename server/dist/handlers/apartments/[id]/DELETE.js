import AppDataSource from "#db_client";
import { Apartments } from "#db_models/Apartments.js";
export async function DELETEapartment(req, res) {
    const { id } = req.params;
    await AppDataSource.getRepository(Apartments).delete({
        id: id,
    });
    res.statusCode = 200;
    res.json({ msg: "Apartment was successfully deleted", id });
}
//# sourceMappingURL=DELETE.js.map