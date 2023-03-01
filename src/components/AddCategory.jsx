import {useState} from 'react';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('...')

    const onInputChange = (evt) => {
        setinputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventdeafult();
        onAddCategory(inputValue);
        setinputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="number"
                placeholder="Numero"
                value={inputValue}
                onChange={(event)=> onInputChange(event)}
            />
        </form>
    )
}
