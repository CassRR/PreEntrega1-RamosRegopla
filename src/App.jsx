import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  const funcionClick = (name) => {
    alert("Estàs en " + name);
  };
  return (
    <div>
      <NavBar handleClick={funcionClick} />
      <ItemListContainer text="Bienvenido a Green Garden" />
    </div>
  );
};

export default App;
