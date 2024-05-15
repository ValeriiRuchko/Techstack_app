export type Apartment = {
  id?: string;
  name: string;
  rooms: number;
  price: number;
  description?: string;
};

export type PriceFilter = "price=asc" | "price=desc" | "";

export type RoomsFilter = `rooms=${number}` | "";
