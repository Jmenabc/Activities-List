import React from 'react';
import Activities from './Activities';

const ActivitieList = ({ activities }) => {
    return (
        <ul className='list-activities'>
            {activities.length > 0 ?
                activities.map((e) => {
                    return <Activities
                        key={e.id}
                        activities={e}
                    />
                })
                : <div className='list-activities__msg'>No hay Tareas agregadas</div>
            }
        </ul>
    );
}

export default ActivitieList;