
export const Categories = ({ categories, onDeleteCategory }) => {
    return <div className="categories_container">
        <h2>CATEGORIES</h2>
        <div className="categories_list">
            {
                categories.length > 0 ? categories.map((category) => (
                    <p key={category}>
                        <span className="cat_title">{category}</span>
                        <span className="close_btn" onClick={() => onDeleteCategory(category)}>X</span>
                    </p>
                )) : <span className="message">No categories added</span>
            }
        </div>
    </div>
}
