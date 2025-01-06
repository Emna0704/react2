import { useState } from "react";
const Form=()=>{
    const [selectedNumber, setSelectedNumber] = useState(""); 
    const [multiples, setMultiples] = useState([]); 

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedNumber(value);
    
    
        if (value === "Aucune") {
          setMultiples([]);
          return;
        }
    
      
        const number = parseInt(value, 10);
        const result = [];
        for (let i = 1; i * number <= 100; i++) {
          result.push(i * number);
        }
        setMultiples(result);
      };

    return (
        <div>
         
          <form>
            <label htmlFor="numberSelect">Choisissez un nombre : </label>
            <select id="numberSelect" value={selectedNumber} onChange={handleChange}>
              <option value="Aucune">Aucune</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
          </form>
    
          <h2>Résultats</h2>
          {multiples.length > 0 ? (
            <ul>
              {multiples.map((multiple, index) => (
                <li key={index}>{multiple}</li>
              ))}
            </ul>
          ) : (
            <p>Aucun multiple à afficher.</p>
          )}
        </div>
      );

}

export default Form;