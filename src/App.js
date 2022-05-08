import UseReducerExample from "./components/useReducerExample";
import { ExampleProvider } from "./Context/exampleContext";
import FileSystemComponent from "./components/FileSystem";
import { fileSystem } from "./data/data";
function App() {
  console.log(fileSystem);
  return (
    <div className="container mb-5">
      <ExampleProvider>
        <FileSystemComponent data={fileSystem} />
      </ExampleProvider>
    </div>
  );
}

export default App;
