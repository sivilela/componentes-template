import React from "react";
import logo from "../img/logo.png";


export default function Header(){
  const cabecalho = "Este é o Header"
  return(
    <div>
      <header className="cabecalho">
        <h1>{cabecalho}</h1>
        <img className="imagem" src = {logo}/>
      </header>
    </div>
  )
}