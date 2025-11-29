import { useQuery } from "@apollo/client/react";
import GET_CATEGORY_FILTERS from "@/data/category-filters-query";

export default function CategoryFilter({handleChange, checkedCats}) {
    const queryVariables = {
        group: ['diet']
    }

    const { data, error } = useQuery(GET_CATEGORY_FILTERS, { variables: queryVariables });

    if (error) {
        console.error(error);
        return null;
    }

    if (!data) return null;

    return (
        <div className="category-filter">
            {data.categories.map( (cat) => (
                <div className="fieldgroup" key={cat.id}>
                    <input 
                        type="checkbox" 
                        id={'cat-' + cat.slug} 
                        name={'cat-' + cat.slug} 
                        value={cat.id}
                        onChange={(e) => handleChange(e)}
                        checked={checkedCats.includes( Number(cat.id) )}
                    />

                    <label htmlFor={'cat-' + cat.slug}>{ cat.title }</label>
                </div>
            ) )}
        </div>
    );
}
