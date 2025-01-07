import React, { useReducer, useState } from 'react';
import { useNavigate, Link  } from 'react-router-dom';

const initialState = {
  totalExperiments: 0,
  brelands: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXP':
      return {
        ...state,
        totalExperiments: action.payload
      };
      case 'SET_BRELANS':
        return {
          ...state,
          brelands: action.payload
        };

    default:
      return state;
  }
};
const dices =3;

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [finish, setFinish]=useState(false)
  const navigate = useNavigate();
  const goDescription = () => {
      navigate("/description", {replace: true})
     }

 
  const rollDice = () => Math.floor(Math.random() * 6) + 1;
  const runEx=()=>{
    let brelands = 0;
    setFinish(false)

    for(let i=0; i<state.totalExperiments;i++){
      let array=[]
      for(let j=0; j<dices; j++){
        let value = rollDice()
        array.push(value)
      }
      console.log('array', new Set(array));
      
      
      if(new Set(array).size ===1){
        brelands++
      }
    }
    dispatch({type:"SET_BRELANS", payload:brelands})
    setFinish(true)
    
  }

  return (
    <div>
      <button onClick={goDescription}>Description du jeu</button>
      <h1>Jeu des dés</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre d'expériences :
          <input
            type="number"
            onChange={(e) => dispatch({type:"SET_EXP",payload:e.target.value})}
            min="1"
          />
        </label>
        <button type="button" onClick={runEx} >
          Lancer
        </button>
        <br/>
        {finish && <Link to={'/statistics/'+state.totalExperiments+'/'+state.brelands}>cliquez içi pour voir vos resultats</Link>}
        
      </form>
      
    </div>
  );
};

export default Home;
