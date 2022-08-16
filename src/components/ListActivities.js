import React from 'react';
import Activities from './Activities';

const ActivitieList = ({ activities, changeActivities, showComplete }) => {
    const toggleComplete = (id) => {
        changeActivities(activities.map((activitie) => {
            if (activitie.id === id) {
                return {
                    ...activitie, complete: !activitie.complete
                }
            }
            return activitie;
        }));
    }

    const editActivitie = (id, newText) => {
        changeActivities(activities.map((activitie) => {
            if (activitie.id === id) {
                return {
                    ...activitie, text: newText
                }
            }
            return activitie;
        }));
    }
    //FILTER NOS PERMITE DEVOLVER UN ARRAY DONDE TENEMOS ELEMENTOS PERO ALGUNOS NO DEPENDE DEL FILTRO
    const deleteActivitie = (id) => {
        changeActivities(activities.filter((activitie) => {
            if (activitie.id !== id) {
                return activitie
            }
            return;
        }));
    }



    return (
        <ul className='list-activities'>
            {activities.length > 0 ?
                activities.map((e) => {
                    if (showComplete) {
                        return <Activities
                            key={e.id}
                            activities={e}
                            toggleComplete={toggleComplete}
                            editActivitie={editActivitie}
                            deleteActivitie={deleteActivitie}
                        />
                    } else if (!activities.complete) {
                        return <Activities
                            key={e.id}
                            activities={e}
                            toggleComplete={toggleComplete}
                            editActivitie={editActivitie}
                            deleteActivitie={deleteActivitie}
                        />
                    }
                    return;

                })
                : <div className='list-activities__msg'>No hay Tareas agregadas</div>
            }
        </ul>
    );
}

export default ActivitieList;