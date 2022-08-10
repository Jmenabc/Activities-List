import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Formulary = ({ activities, changeActivities }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        changeActivities(
            'Tareas cambiadas'
        );
    }

    return (
        <form action='' className='formulary-activities' onSubmit={handleSubmit}>
            <input
                type='text'
                className='formulary-activities__input'
                placeholder='Escribe tus tareas de 1 en 1'
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