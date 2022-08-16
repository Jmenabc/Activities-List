import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showComplete, changeShowComplete }) => {
    const toggleCompletes = () => {
        changeShowComplete(!changeShowComplete);
    }

    return (
        <header className='header'>
            <h1 className='header__title'>Lista de Tareas</h1>
            {showComplete ? <button className='header__button' onClick={() => toggleCompletes()}>
                No mostrar completadas
                <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' />
            </button>
                :
                <button className='header__button' onClick={toggleCompletes()}>
                    Mostrar completadas
                    <FontAwesomeIcon icon={faEye} className='header__icon-button' />
                </button>

            }

        </header>
    );
}

export default Header;