import "./styles.css";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm.js";
import Checkbox from "./przydatneFunkcje/Checkbox";
import ReducerExample1 from "./przydatneFunkcje/ReducerExample1";
import ReducerExample2 from "./przydatneFunkcje/ReducerExample2";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
      <Checkbox />
      <ReducerExample1 />
      <ReducerExample2 />
    </>
  );
}