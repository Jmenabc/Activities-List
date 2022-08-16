import React, { useState, useEffect } from 'react';
import './elements/App.css';
import Header from './components/Header';
import Formulary from './components/Formulary';
import { v4 as uuidv4 } from 'uuid';
import ActivitieList from './components/ListActivities';

function App() {
  //Obtenemos de localStorage las tareas guardadas
  const activitiesSave = localStorage.getItem('activities') ?
    JSON.parse(localStorage.getItem('activities')) : [];
  //Le damos un estado a las tareas
  const [activities, changeActivities] = useState(activitiesSave);
  //Guardando el estado en localStorage
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);
  //Comprobamos que showCompletes no es null
  let setShowComplete = '';
  if (localStorage.getItem('showComplete') === null) {
    setShowComplete = true;
  } else {
    setShowComplete = localStorage.getItem('showComplete') === true;
  }
  //Estado para mostrar las tareas completadas
  const [showComplete, changeShowComplete] = useState();

  useEffect(() => {
    localStorage.setItem('showComplete', showComplete.toString());
  }, [showComplete]);

  return (
    <div className='container'>
      <Header showComplete={showComplete} changeShowComplete={changeShowComplete} />
      <Formulary
        activities={activities}
        changeActivities={changeActivities}
      />
      <ActivitieList activities={activities} changeActivities={changeActivities} showComplete={showComplete} />
    </div>
  );
}

export default App;
