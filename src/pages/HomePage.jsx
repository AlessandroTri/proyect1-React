import React from "react";
import { ProductsContext } from "../components/shared/ProductsContext";
import { useState } from "react";
import OneList from "../components/OneList";
import Ad from "../components/shared/Ad";

export const HomePage = () => {
  const myProducts = [
    {
      id: "1",
      name: "Mouse",
      cantidad: 5,
    },
    {
      id: "2",
      name: "Iphone",
      cantidad: 10,
    },
    {
      id: "3",
      name: "Teclado",
      cantidad: 7,
    },
    {
      id: "4",
      name: "WebCam",
      cantidad: 25,
    },
  ];

  const comments = {
    visible: false,
    comentarios:[
    {
      id:0,
      usuario:"",
      comentario:""
    }
  ]}



  const [comment, setComment] = useState(comments)
  const [myProduct, setmyProduct] = useState(myProducts);

  return (
    <div>
      <ProductsContext props={myProduct} setProps={setmyProduct}>
      </ProductsContext>
        <OneList comment={comment} setComment={setComment}></OneList>
        <Ad props={myProduct} setProps={setmyProduct}></Ad>
    </div>
  );
};
