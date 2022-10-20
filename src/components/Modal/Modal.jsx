import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setBtnModal, content }) => {
  const [Color, setColor] = useState("");

  return (
    <div className="modal">
      <div className="contenedor">
        <header style={{ backgroundColor: Color }}>
          <h1> Creador de Web </h1>
          <p>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
          </p>
          <label onClick={() => setBtnModal(false)}>x</label>
        </header>
        {/* <div className="contenido"></div> */}
     
        {content}
      </div>
    </div>
  );
};

export default Modal;
