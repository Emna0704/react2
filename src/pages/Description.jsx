import React from 'react';
import { useNavigate } from 'react-router-dom';

const Description = () => {
    const navigate = useNavigate()
const goHome = () => {
    navigate("/", {replace: true})
   }
   return <>
    <h1>Description</h1>
    <p>
      Ce jeu consiste à lancer trois dés plusieurs fois. Un brelan est obtenu
      lorsque les trois dés affichent le même chiffre. Cette application permet
      de calculer le nombre de brelans de 6 obtenus sur un certain nombre
      d'expériences.
    </p>
    <button onClick={goHome}>Retour à l'accueil</button>

   </>

}

export default Description;
