import Navbar from "./component/Navbar/Navbar";
import Questionandanswer from "./component/Questionandanswer/Questionandanswer";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
      <Questionandanswer></Questionandanswer>
    </div>
  );
}

export default App;
