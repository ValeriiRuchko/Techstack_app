import Form from "../components/Form.js";
import PrimaryContainer from "../components/components-styled/PrimaryContainer.styled.js";

type MainPageProps = {
  className: string;
};

export default function MainPage(props: MainPageProps) {
  return (
    <div className={`${props.className}`}>
      <PrimaryContainer>
        <Form />
      </PrimaryContainer>
    </div>
  );
}
