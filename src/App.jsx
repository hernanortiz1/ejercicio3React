import HelloWord from "./components/HelloWorld";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const mensajeProps = "my friend!";
  return (
    <>
      <HelloWord mensajeProps={mensajeProps} />
    </>
  );
}

export default App;
