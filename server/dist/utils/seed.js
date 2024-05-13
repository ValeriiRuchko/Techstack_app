import AppDataSource from "../db/data-source.js";
import { Apartments } from "#db_models/Apartments.js";
await AppDataSource.initialize();
async function seedDB() {
    const names = [
        "Perfect nest for small families",
        "Creative stronghold for artists",
        "Small but convenient",
        "Awesome match for timbers",
    ];
    const descriptions = [
        "Just my luck, no ice. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You're a very talented young man, with your own clever thoughts and ideas.",
        "Do you need a manager? I gave it a cold? I gave it a virus. A computer virus. You know what? It is beets. I've crashed into a beet truck.",
        "Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Forget the fat lady! You're obsessed with the fat lady!",
        "Drive us out of here! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.",
    ];
    const rooms = [4, 4, 2, 1];
    const prices = [12.3, 5, 7.44, 17];
    for (let i = 0; i < 4; i++) {
        const newApartment = new Apartments();
        newApartment.name = names[i];
        newApartment.description = descriptions[i];
        newApartment.rooms = rooms[i];
        newApartment.price = prices[i];
        await AppDataSource.createQueryBuilder()
            .insert()
            .into(Apartments)
            .values(newApartment)
            .execute();
        console.log("Inserted apartment: ", newApartment);
    }
    await AppDataSource.destroy();
}
seedDB();
//# sourceMappingURL=seed.js.map