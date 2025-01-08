import React from 'react';
import { useSelector } from 'react-redux';
import './display.css';
import { selectMoney } from '../../store/selector/selector';

const display = () => {
  

  const change = useSelector(selectMoney)


  return (
    <div className="change-display">
      <h2>Résultats</h2>
      {change?.map(({ denomination, count }) => (
        count > 0 && (
          <p key={denomination}>
            Dénomination {denomination} unité(s) : {count}
          </p>
        )
      ))}
    </div>
  );
};

export default display;
