import React from "react";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";

export default function Footer(){
  const rodape = "Este é o Footer"
  return(
    <>
      <footer>
        <h3>{rodape}</h3>
        <SocialMedia/>
        <Copyright/>
      </footer>
    </>
  )
}