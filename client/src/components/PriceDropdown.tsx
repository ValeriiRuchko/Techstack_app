import { Dispatch, SetStateAction } from "react";
import { PriceFilter } from "../@types/common_types";

type FilterByPriceDropdown = {
  setValue: Dispatch<SetStateAction<PriceFilter>>;
};

export default function FilterByPriceDropdown(props: FilterByPriceDropdown) {
  return (
    <select
      name="price-sort"
      onChange={(e) => {
        const price = e.target.value as "" | "asc" | "desc";
        if (price !== "") {
          props.setValue(`price=${price}`);
        } else {
          props.setValue("");
        }
      }}
    >
      <option value="">No filter</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
}
