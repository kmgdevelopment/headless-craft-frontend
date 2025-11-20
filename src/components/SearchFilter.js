export default function SearchFilter({inputValue, handleChange}) {
    return (
        <div className="search-filter">
            <input 
                id="search" 
                name="search" 
                type="search" 
                value={inputValue() ?? ''} // call reactive var as a function to read its value
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}