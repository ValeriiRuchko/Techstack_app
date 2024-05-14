import Button from "../components/components-styled/Button.styled.js";
import Container from "../components/components-styled/Container.styled.js";

type MainPageProps = {
  className: string;
};

export default function MainPage(props: MainPageProps) {
  return (
    <div className={`${props.className}`}>
      <Container>
        <Button>Hello</Button>
        {/* <Button $primary>How are you</Button> */}
      </Container>
    </div>
  );
}
