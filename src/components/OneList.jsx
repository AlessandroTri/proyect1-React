import React, { useState } from "react";

function OneList({ comment, setComment }) {
  const [texto, setTexto] = useState("");

  const cambiar = (ev) => {
    setTexto(ev.target.value);
  };

  const addTexto = () => {
    console.log(comment);
    comment.comentarios.push({ id: comment.comentarios.length > 0? comment.comentarios[comment.comentarios.length - 1].id +1:0, usuario: 0, producto: 0, comentario: texto });
    setComment({...comment});
  };

  const eliminar = (id) => {
    comment.comentarios = comment.comentarios.filter((element) => id !== element.id);
    setComment({...comment});
  };

  return (
    <div>
      {comment.comentarios.map((element) => {
        return (
          <>
            <p>
              {element.comentario} <button onClick={() => eliminar(element.id)}>X</button>
            </p>
          </>
        );
      })}
      <input type="text" onChange={cambiar}></input>
      <button onClick={addTexto}>Añadir</button>
    </div>
  );
}

export default OneList;
