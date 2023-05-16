import { useState } from 'react';

export const AddCategory = ({ onNewCategory, setErrorMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 2) {
            setErrorMessage('Query is too short, pal');
            return;
        }

        onNewCategory(inputValue.trim());
        console.log(inputValue)
        setInputValue('');
    }

    const onInputChange = ({ target }) => {
        if (target.value.length > 20) {
            setErrorMessage('Your query is too large, bro');
            return;
        }
        setInputValue(target.value);
    }

    return <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Search something funny..."
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
}
