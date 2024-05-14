import MainContainer from "../components/components-styled/MainContainer.styled.js";
import Button from "../components/Button.js";

type MainPageProps = {
  className: string;
};

export default function MainPage(props: MainPageProps) {
  return (
    <div className={`${props.className}`}>
      <MainContainer>
        <Button
          onClick={() => {
            alert("I'm clicked");
          }}
          text="Create apartment"
        />
        <Button
          $primary={true}
          onClick={() => {
            alert("Me too");
          }}
          text="Delete"
        />
      </MainContainer>
    </div>
  );
}
