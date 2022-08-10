import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4} from 'uuid';

const Formulary = ({ activities, changeActivities }) => {
    const [inputActivities, changeActivitiesInput] = useState('');

    const handleInput = (e) => {
        changeActivitiesInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); //para que cuando pulses el boton no se actualize

        changeActivities(
            [
                ...activities,
                {
                    id: uuidv4(),
                    text: 'Tirar la basura',
                    complete: false
                }
            ]
        );
    }

    return (
        <form action='' className='formulary-activities' onSubmit={handleSubmit}>
            <input
                type='text'
                className='formulary-activities__input'
                placeholder='Escribe tus tareas de 1 en 1'
                value={inputActivities}
                onChange={(e) => handleInput(e) }
            />
            <button
                type='submit'
                className='formulary-activities__btn'
            >
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className='formulary-activities__icon-btn'
                />
            </button>
        </form>
    );
}

export default Formulary;