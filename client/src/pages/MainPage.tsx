type MainPageProps = {
  className: string;
};

export default function MainPage(props: MainPageProps) {
  return (
    <div className={`${props.className}`}>
      <p>It's a main page</p>
    </div>
  );
}
