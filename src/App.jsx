import React, { useState } from "react";
import BaseNumberInput from "./components/BaseNumberInput";

const App = () => {
  const [decimalValue, setDecimalValue] = useState("");
  const [binaryValue, setBinaryValue] = useState("");
  const [error, setError] = useState(""); 

  const handleDecimalChange = (value) => {
    setDecimalValue(value);
    if (!isNaN(value) && value !== "") {
      setBinaryValue(Number(value).toString(2));
      setError(""); 
    } else {
      setError("Le nombre  doit contenir que des chiffres");
      setBinaryValue("");
    }
  };

  const handleBinaryChange = (value) => {
    setBinaryValue(value);

    if (/^[01]*$/.test(value)) {
      setDecimalValue(value !== "" ? parseInt(value, 2).toString() : "");
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
