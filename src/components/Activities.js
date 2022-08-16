import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons';

const Activities = ({ activities, toggleComplete, editActivities, deleteActivitie }) => {
    const [editActivitie, changeEditActivitie] = useState(false);
    const [newActivitie, changeNewActivitie] = useState(activities.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        editActivities(activities.id, newActivitie);
        changeEditActivitie(false)
    }


    return (
        <li
            className='list-activities__activitie'
        >
            <FontAwesomeIcon
                icon={activities.complete ?
                    faCheckSquare : faSquare}
                className='list-activities__icon list-activities__icon-check'
                onClick={() => toggleComplete(activities.id)}
            />

            <div className='list-activities__txt'>
                {editActivitie ?
                    <form action='' onSubmit={handleSubmit} className='formulary-edit-activitie'>
                        <input
                            type='text'
                            className='formulary-edit-activitie__input'
                            value={newActivitie}
                            onChange={(e) => changeNewActivitie(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='formulary-edit-activitie__btn'
                        >
                            Actualizar
                        </button>
                    </form> :
                    activities.text
                }
            </div>

            <div className='list-activities__container-boton'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='list-activities__icon list-activities__icon-action'
                    onClick={() => changeEditActivitie(!editActivitie)}
                />

                <FontAwesomeIcon
                    icon={faTimes}
                    className='list-activities__icon list-activities__icon-action'
                    onClick={() => deleteActivitie(activities.id)}
                />

            </div>
        </li>
    );
}

export default Activities;