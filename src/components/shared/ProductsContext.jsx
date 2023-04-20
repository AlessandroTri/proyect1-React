import React, { useState } from "react";
import editar from '../img/editar.png';
import borrar from '../img/borrar.png';
import Modal from "./Modal";


export const ProductsContext = ({ props, setProps, }) => {
  
const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  
const modific = (index) => {
  const listModify = [...props];
  listModify[index].name = prompt("Elige el nombre");
  listModify[index].cantidad = prompt("Elige la cantidad");
  setProps(listModify);
};


  const deleteProduct = (id) =>{
    console.log(props)

    const newProps = props.filter(prop => prop.id !== id);
    setProps(newProps);
  }
  
  const products = props;

  console.log(props);

  return (
    <div className="itemCont">
      {products.map((item, index) => (
        <div className="Unidad" key={index}>
          <div className="imagen">
        <img className="edit" src = {editar} alt={item.id}  onClick={() => modific(index)} />
        <img className="borrar" src= {borrar} alt= {item.id} onClick={() =>deleteProduct(item.id)} />
          </div>
          <h4>{item.name}</h4>
          <h4>Cantidad: {item.cantidad}</h4>
          <button className="clickme" onClick={() => Toggle()}>Comentar</button>
           <Modal show={modal} title= "My Modal" close={Toggle}/>
           
        </div>
      ))}
    </div>
  );
};



