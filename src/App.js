import React, { useState } from 'react';
import './elements/App.css';
import Header from './components/Header';
import Formulary from './components/Formulary';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [activities, changeActivities] = useState(
    [
      {
        id: uuidv4(),
        text: 'Lavar Ropa',
        complete: false
      },
      {
        id: uuidv4(),
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
