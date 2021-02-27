//71. Componente AddCategory
//manejaremos y visualizaremos cuando la persona escribe algo en un input y presionar ENTER y disparar algo

// 72. Comunicación entre componente:
// vamos hacer una comunicación entre en linput del formulario con la <li>lista</li>
// ¿Cómo lo hacemos? - llamar desde aqui al setCategories del archivo GifExpertApp.js
// y en GifExpertApp.js, pasarle a este componente el setCategories como propiedades

// rafc + TAB
import React, {useState} from 'react';

//importemos el propType, para que setCategories, sea una función requerida:
import PropTypes from 'prop-types';

// 72. añadimos props , para recivir las propiedades props
// o usualmente se destructuran los argumentos del componente:
export const AddCategory = ({setCategories}) => {

    //necesitamos para el input text, un estado:
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
        //setCategories:
        // 72.Comunicación entre componente:
        //validemos, para que no puedan enviar un string vacío,mínomo 2 car y lo inicializamos a  '':
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//una vez importado el propType, para que setCategories, sea una función requerida:
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
