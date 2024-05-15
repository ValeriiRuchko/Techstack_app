import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Apartment, RoomsFilter } from "../@types/common_types";

type FilterByPriceDropdown = {
  setValue: Dispatch<SetStateAction<RoomsFilter>>;
  apartments: Apartment[];
};

export default function FilterByRoomsDropdown(props: FilterByPriceDropdown) {
  const [possibleRooms, setPossibleRooms] = useState<number[]>([]);

  // understand how to save all unique rooms
  useEffect(() => {
    const temp: number[] = [];
    for (let i = 0; i < props.apartments.length; i++) {
      temp.push(props.apartments[i].rooms);
    }
    const uniqueAparts = new Set(temp);
    setPossibleRooms(new Array(...uniqueAparts));
  }, [props.apartments]);

  return (
    <select
      name="price-sort"
      onChange={(e) => {
        const rooms = e.target.value as "" | number;
        if (rooms !== "") {
          props.setValue(`rooms=${rooms}`);
        } else {
          props.setValue("");
        }
      }}
    >
      <option value="">No filter</option>
      {possibleRooms.map((roomsVal, idx) => {
        return (
          <option key={idx} value={roomsVal}>
            {roomsVal}
          </option>
        );
      })}
    </select>
  );
}
