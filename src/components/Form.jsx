import { useState } from "react"


function Form({renderCard}){
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    function handleChange (e){
        let name =(e.target.value)
        const withoutSpaces = name.trim();
        if(withoutSpaces.length > 2){
            setInputValue(withoutSpaces)
        } else {
            return 'Por favor chequea que la información sea correcta'
        }

    }

    function handleChange2 (e){
        let animal=(e.target.value)
        if (animal.length > 5) {
            setInputValue2(animal)
        } else {
            return 'Por favor chequea que la información sea correcta'
        }
    }

    function handleSubmit (e){
        e.preventDefault()
        
        renderCard(inputValue,inputValue2)
       
    }


    return(
        
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Ingrese su nombre" value={inputValue} onChange={handleChange}></input>
            <input type='text' placeholder="Ingrese su animal favorito" value={inputValue2} onChange={handleChange2}></input>
            <button type='submit'>Agregar</button>
        </form>

        
    )
}

export default Form