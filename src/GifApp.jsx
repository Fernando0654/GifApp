import { useState, useEffect } from 'react';
import { AddCategory, GifList, Categories } from './components';
import ErrorMessage from './components/ErrorMessage';

const GifApp = () => {

    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
        }
    }, [errorMessage]);


    const onAddCategory = (newCategory) => {
        console.log(newCategory)
        if (categories.includes(newCategory.toUpperCase())) {
            setErrorMessage('Category already added');
            return;
        }
        console.log(newCategory)
        setCategories([newCategory.toUpperCase(), ...categories]);
    }

    const onDeleteCategory = (category) => {
        if (categories.includes(category)) {
            setCategories(categories.filter((_category) => _category !== category));
        }
    }

    return <main>
        {errorMessage.length > 0 ? <ErrorMessage message={errorMessage} /> : null}
        <div className="main_content">
            <h1>GifApp!</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
                setErrorMessage={setErrorMessage}
            />
            {
                categories.map((category) => <GifList
                    key={category}
                    category={category}
                    setErrorMessage={setErrorMessage}
                    onDeleteCategory={onDeleteCategory}
                />)
            }
        </div>
        <Categories
            categories={categories}
            onDeleteCategory={onDeleteCategory}
        />
    </main>
}

export default GifApp