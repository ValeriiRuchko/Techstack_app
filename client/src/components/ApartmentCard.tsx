import { Apartment } from "../@types/common_types";
import Button from "./Button";
import DirectionContainer from "./components-styled/DirectionContainer.styled";

type ApartmentCardProps = {
  apartment: Apartment;
  updatePage: () => Promise<void>;
};

export default function ApartmentCard(props: ApartmentCardProps) {
  async function handleButtonClick() {
    try {
      const res = await fetch(
        `http://localhost:3002/apartments/${props.apartment.id}`,
        {
          method: "DELETE",
        },
      );
      const info: { msg: string } = await res.json();
      props.updatePage();
      console.log(info.msg);
    } catch (err: unknown) {
      console.log(err);
    }
  }

  const { name, rooms, price, description } = props.apartment;
  return (
    <DirectionContainer
      $vertical={true}
      $width="100%"
      $height="auto"
      $gap="15px 0"
      style={{
        border: "3px solid #f4f1de",
        padding: "10px 20px",
      }}
    >
      <h2>{name}</h2>
      <DirectionContainer style={{ justifyContent: "left" }} $gap="20px">
        <p>Rooms: {rooms}</p>
        <p>Price: {price}</p>
      </DirectionContainer>

      <DirectionContainer $vertical={true}>
        <h3>Description:</h3>
        <p>{description}</p>
      </DirectionContainer>
      <Button
        $primary={true}
        text="Delete"
        onClick={handleButtonClick}
      ></Button>
    </DirectionContainer>
  );
}
