import { useGetGifs } from "../hooks/useGetGifs"
import ErrorMessage from "./ErrorMessage";
import { GifItems } from "./GifItems";

export const GifList = ({ category, setErrorMessage, onDeleteCategory }) => {

    console.log(category)
    const { images, isLoading } = useGetGifs(category, setErrorMessage, onDeleteCategory);

    return <div className="category_items_container">
        {images.length <= 0 && <ErrorMessage />}
        <h3>{category}</h3>
        {isLoading && <h2 className="loading">Loading...</h2>}
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItems
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
    </div>
}
