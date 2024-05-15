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
import SortByRoomsInput from "../components/RoomsInput.js";
import DirectionContainer from "../components/components-styled/DirectionContainer.styled.js";

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
      <PrimaryContainer style={{ gap: "30px" }}>
        <Form updatePage={fetchApartments} />
        <DirectionContainer
          $width="40vw"
          $gap="10px 20px"
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <h2>Results found: {counter}</h2>
          <DirectionContainer $vertical={true} $gap="10px 0">
            <SortByRoomsInput setValue={setRoomsFilter} />
            <FilterByPriceDropdown setValue={setPriceFilter} />
          </DirectionContainer>
        </DirectionContainer>
        <DirectionContainer $gap="40px 0" $vertical={true} $width="40vw">
          {apartments?.map((apartment) => {
            return (
              <ApartmentCard
                key={apartment.id}
                updatePage={fetchApartments}
                apartment={apartment}
              />
            );
          })}
        </DirectionContainer>
      </PrimaryContainer>
    </div>
  );
}
