import Title from "./Components/Title";
import Todos from "./Components/Todos";

function App() {
  return (
    <div>
      <div className="container">
        <Title title="Todo App" />
        <Todos />
      </div>
    </div>
  );
}

export default App;
