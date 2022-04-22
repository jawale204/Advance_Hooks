import UseReducerExample from "./components/useReducerExample";
import { ExampleProvider } from "./Context/exampleContext";

function App() {
  return (
    <div className="container mb-5">
      <ExampleProvider>
        <UseReducerExample />
      </ExampleProvider>
    </div>
  );
}

export default App;
