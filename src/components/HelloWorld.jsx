import { useState } from "react";

const HelloWord = ({ mensajeProps }) => {
const [texto, setTexto] = useState("")
const mostrarTexto =()=>{
    setTexto("(from changed state)")
}
    return (
    <div>
      <h1 className="m-3">Hello {mensajeProps} {texto}</h1>
      <button className="btn btn-primary m-3" onClick={mostrarTexto}>Click me</button>
    </div>
  );
};

export default HelloWord;
