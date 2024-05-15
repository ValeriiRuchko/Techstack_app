import Form from "../components/Form.js";
import { useCallback, useEffect, useState } from "react";
import PrimaryContainer from "../components/components-styled/PrimaryContainer.styled.js";
import type {
  Apartment,
  PriceFilter,
  RoomsFilter,
} from "../@types/common_types";
import ApartmentCard from "../components/ApartmentCard.js";
import FilterByPriceDropdown from "../components/PriceDropdown.js";
import FilterByRoomsDropdown from "../components/RoomsDropdown.js";

type MainPageProps = {
  className: string;
};

export default function MainPage(props: MainPageProps) {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  // counter of amount of available apartments
  const [counter, setCounter] = useState<number>();

  // filter-related-hooks
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("");
  const [roomsFilter, setRoomsFilter] = useState<RoomsFilter>("");

  const fetchApartments = useCallback(async () => {
    const res = await fetch(
      `http://localhost:3002/apartments?${priceFilter}&${roomsFilter}`,
    );
    const data: { apartments: Apartment[]; count: number } = await res.json();
    setApartments(data.apartments);
    setCounter(data.count);
  }, [priceFilter, roomsFilter]);

  useEffect(() => {
    fetchApartments();
  }, [fetchApartments]);

  return (
    <div className={`${props.className}`}>
      <PrimaryContainer>
        <Form updatePage={fetchApartments} />
        <h2>Results found: {counter}</h2>
        <FilterByPriceDropdown setValue={setPriceFilter} />
        <FilterByRoomsDropdown
          setValue={setRoomsFilter}
          apartments={apartments}
        />
        {apartments?.map((apartment) => {
          return (
            <ApartmentCard
              key={apartment.id}
              updatePage={fetchApartments}
              apartment={apartment}
            />
          );
        })}
      </PrimaryContainer>
    </div>
  );
}
