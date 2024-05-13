import Button from "../components/components-styled/Button.styled.js";

type MainPageProps = {
  className: string;
};

export default function MainPage(props: MainPageProps) {
  return (
    <div className={`${props.className}`}>
      <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
        <p>It's a main page</p>
        <Button>Hello</Button>
        <Button $primary>How are you</Button>
      </div>
    </div>
  );
}
