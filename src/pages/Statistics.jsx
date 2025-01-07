import React from 'react';
import { useParams , useNavigate} from 'react-router-dom';

const Statistics = () => {
  const { count, brelands } = useParams();
  const navigate = useNavigate()
  const goHome = () => {
      navigate("/", {replace: true})
     }

  return (
    <div>
      <h1>Statistiques</h1>
      {brelands === 0 ? (
        <p>Sorry, aucun brelan de 6 obtenu.</p>
      ) : (
        <>
          <p>Nombre total d'expériences : {count}</p>
          <p>Nombre de brelans de 6 : {brelands}</p>
          <p>Probabilité : {((brelands / count) * 100).toFixed(2)}%</p>
        </>
      )}
      <button onClick={goHome}>Retour à l'accueil</button>
    </div>
    
  );
};

export default Statistics;
