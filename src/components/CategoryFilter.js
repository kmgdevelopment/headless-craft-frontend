export default function CategoryFilter() {
    return (
        <div className="category-filter">
            <div className="fieldgroup">
                <input type="checkbox" id="vegan" name="vegan" />
                <label htmlFor="vegan">Vegan</label>
            </div>
            <div className="fieldgroup">
                <input type="checkbox" id="gluten-free" name="gluten-free" />
                <label htmlFor="gluten-free">Gluten Free</label>
            </div>
            <div className="fieldgroup">
                <input type="checkbox" id="low-carb" name="low-carb" />
                <label htmlFor="low-carb">Low Carb</label>
            </div>
            <div className="fieldgroup">
                <input type="checkbox" id="low-sodium" name="low-sodium" />
                <label htmlFor="low-sodium">Low Sodium</label>
            </div>
        </div>
    );
}
