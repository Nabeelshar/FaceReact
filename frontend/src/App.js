import { LiveVideo } from "./svg";

function App() {
  const get = async () => {
    const response = await fetch("http://localhost:8000/");
    // const data = await response.json();
    console.log(response);
  };
  get();

  return (
    <div className="friends_suggestions_icon">
      welcome to frontend hy
      <LiveVideo color="red" />
    </div>
  );
}

export default App;
