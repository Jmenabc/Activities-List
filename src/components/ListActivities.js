import React from 'react';
import Activities from './Activities';

const ActivitieList = ({ activities, changeActivities }) => {
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

    return (
        <ul className='list-activities'>
            {activities.length > 0 ?
                activities.map((e) => {
                    return <Activities
                        key={e.id}
                        activities={e}
                        toggleComplete={toggleComplete}
                    />
                })
                : <div className='list-activities__msg'>No hay Tareas agregadas</div>
            }
        </ul>
    );
}

export default ActivitieList;