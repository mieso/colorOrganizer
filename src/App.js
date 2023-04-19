import "./styles.css";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm.js";
import Checkbox from "./przydatneFunkcje/Checkbox";
import ReducerExample1 from "./przydatneFunkcje/ReducerExample1";
import ReducerExample2 from "./przydatneFunkcje/ReducerExample2";
import GitHubUser from "./przydatneFunkcje/ManipulacjaDanymi";
import List from "./przydatneFunkcje/GenerowaneWlasciwosci";
// import tahoe_peaks from "./tahoe_peaks.json";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
      <Checkbox />
      <ReducerExample1 />
      <ReducerExample2 />
      <GitHubUser login="mieso" />
      <List />
      {/* <List
        data={tahoe_peaks}
        renderEmpty={<p>Lista jest pusta.</p>}
        renderItem={item => (
          <>
            {item.name} - {item.elevation.toLocaleString()}ft
          </>
        )}
      /> */}
    </>
  );
}