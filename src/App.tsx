import "./App.css";
import { MaterialUi } from "./components/MaterialUi";
import { Chakra } from "./components/Chakra";
import { NextUi } from "./components/NextUi";

function App() {
  return (
    <div className="text-left">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex mt-10">
        <MaterialUi />
      </div>
      <div className="flex mt-10">
        <Chakra />
      </div>
      <div className="flex mt-10">
        <NextUi />
      </div>
    </div>
  );
}

export default App;
