import React from "react";
import './style.css'
export const Herramientas = () => {
  return (
    <>
      <div id="contenedor">
        <menu>
          <ul>
            <li>
              <a href="#top">Inicio </a>
            </li>
            <li>
              <a href="#top">Extras </a>
            </li>
            <li>
              <a href="#top">Aserca del proyecto</a>
            </li>
          </ul>
          <div className="clearFix"></div>
        </menu>
        <section id="prinsipal">
          <h1>Componentes de la web</h1>
          <div className="caja">Esta es la caja 1</div>
          <div className="caja">Esta es la caja 2</div>
          <div className="caja">Esta es la caja 3</div>
          <div className="caja">Esta es la caja 4</div>
          <div className="caja">Esta es la caja 5</div>
          <div className="caja">Esta es la caja 6</div>
          <div className="caja">Esta es la caja 7</div>
          <div className="caja">Esta es la caja 8</div>
        </section>
        <aside id="lateral">
          <h1>Esta es la barra lateral</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            repellat, quaerat sapiente natus esse ut quisquam voluptas officiis
            provident! Illum magni adipisci quaerat, labore suscipit fugiat
            expedita illo? Debitis?
          </p>
        </aside>
        <div className="clearFix"></div>
        <footer>Este es el contenido del pie de pagina</footer>
      </div>
    </>
  );
};
