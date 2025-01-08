import React from 'react';

import FormInput from './component/Form/Form';
import ChangeDisplay from './component/display/display';

const App = () => {
  return (
    
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Calculateur de Monnaie</h1>
        <FormInput />
        <ChangeDisplay />
      </div>
  );
};

export default App;
