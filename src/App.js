import React, { useState } from 'react';
import './elements/App.css';
import Header from './components/Header';
import Formulary from './components/Formulary';

function App() {
  const [activities, changeActivities] = useState(
    [
      {
        id: 1,
        text: 'Lavar Ropa',
        complete: false
      },
      {
        id: 2,
        text: 'Lavaplatos',
        complete: false
      }
    ]
  );

  return (
    <div className='container'>
      <Header />
      <Formulary
        activities={activities}
        changeActivities={changeActivities}
      />
    </div>
  );
}

export default App;
