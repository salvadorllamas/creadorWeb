import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { Herramientas } from "./components/herramientas/Herramientas";
 import  {Esqueleto} from  './components/templates/Esqueleto';
function App() {
  const [btnModal1, setbtnModal1] = useState(false);
  const [btnModal2, setBtnModal2] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Creador de Webs custom</p>
        <button id="boton" type="button" onClick={() => setbtnModal1(true)}>
          Crear Web
        </button>
        <button
          id="boton"
          type="button"
          onClick={() => setBtnModal2(true)}
        >
          Esquema Automatico
        </button>
        {btnModal1 ? (
          <Modal setBtnModal={setbtnModal1} content={<Herramientas />} />
        ) : (
          ""
        )}

        {btnModal2 ? (
          <Modal setBtnModal={setBtnModal2} content={<Esqueleto/>} />
        ) : (
          ""
        )}
      </header>

      <section>
        <h2>Caracteristicas del sistema </h2>
        <p>
          Es un sitema que se encargara de crear paginas web de manera grafica y
          al finalisar la construcion de la web te exportara el codigo en un
          archivo .txt
        </p>
      </section>
    </div>
  );
}

export default App;
