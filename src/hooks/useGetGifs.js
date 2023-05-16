import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useGetGifs = (category, setErrorMessage, onDeleteCategory) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        console.log(category)
        const response = await getGifs(category);
        if(response.length <= 0) {
            setErrorMessage('No gifs found');
            onDeleteCategory(category);
            setIsLoading(false);
            return;
        }
        setImages(response);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
    
}
