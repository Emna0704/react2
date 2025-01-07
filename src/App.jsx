import React, { useState } from "react";
import BaseNumberInput from "./components/BaseNumberInput";

const App = () => {
  const [decimalValue, setDecimalValue] = useState("");
  const [binaryValue, setBinaryValue] = useState("");
  const [error, setError] = useState(""); 

  const handleDecimalChange = (value) => {
    setDecimalValue(value);
    if (!isNaN(value) && value !== "" || (/^-?\d*$/.test(value))) {
       
      if (Number(value) < 0) {
        const absBinary = Math.abs(Number(value)).toString(2).padStart(7, "0"); 
        const signBit = "1"; 
        const signMagnitudeBinary = signBit + absBinary; 
        setBinaryValue(signMagnitudeBinary);
      } else {
      
        const normalBinary = Number(value).toString(2); 
        setBinaryValue(normalBinary);
      }

    } else {
      setError("Le nombre  doit contenir que des chiffres");
      setBinaryValue("");
    }
  };

  const handleBinaryChange = (value) => {
    setBinaryValue(value);
  
    if (/^[01]*$/.test(value)) {
      if (value !== "") {
        const bitLength = value.length;
        const num = parseInt(value, 2);
        const isNegative = value[0] === "1";
        const decimalValue = isNegative ? num - Math.pow(2, bitLength) : num;
        setDecimalValue(decimalValue.toString());
      } else {
        setDecimalValue("");
      }
      setError("");
    } else {
      setError("Le nombre binaire doit contenir uniquement des 0 et des 1.");
    }
  };

  return (
    <div >
      <h1>Convertisseur Déc/Bin</h1>
      <BaseNumberInput
        label="Nombre décimal"
        value={decimalValue}
        onChangeBase={handleDecimalChange}
      />
      <BaseNumberInput
        label="Nombre binaire"
        value={binaryValue}
        onChangeBase={handleBinaryChange}
      />
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
      )}
    </div>
  );
};

export default App;
