import { Dispatch, SetStateAction } from "react";
import { PriceFilter } from "../@types/common_types";

type FilterByPriceDropdown = {
  setValue: Dispatch<SetStateAction<PriceFilter>>;
};

export default function FilterByPriceDropdown(props: FilterByPriceDropdown) {
  return (
    <select
      name="price-sort"
      style={{ width: "15rem", height: "1.5rem", borderRadius: "5px" }}
      onChange={(e) => {
        const price = e.target.value as "" | "asc" | "desc";
        if (price !== "") {
          props.setValue(`price=${price}`);
        } else {
          props.setValue("");
        }
      }}
    >
      <option value="">Sort by price</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
}
