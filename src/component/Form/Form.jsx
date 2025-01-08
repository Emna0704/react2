import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateChange, resetChange } from '../../store/action/action';
import './Form.css';

const Form = () => {
  const [inputAmount, setInputAmount] = useState('');
  const dispatch = useDispatch();

  const handleCalculate = () => {
    const amount = parseInt(inputAmount, 10);
    if (!isNaN(amount)) {
      dispatch(calculateChange(amount));
    }
  };

  const handleReset = () => {
    setInputAmount('');
    dispatch(resetChange());
  };

  return (
    <div className="form-input">
      <label>
        Montant :
        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          placeholder="Saisir le montant"
          min="1"
          pattern="[^0-9]"
        />
      </label>
      <button onClick={handleCalculate}>Dénomination</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Form;
