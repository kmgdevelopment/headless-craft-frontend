import Head from "next/head";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import RecipeListing from "@/components/RecipeListing";
import SearchFilter from "@/components/SearchFilter";
import CategoryFilter from "@/components/CategoryFilter";

import { useQuery, useReactiveVar } from "@apollo/client/react";
import { makeVar } from "@apollo/client";
import GET_RECIPE_ENTRIES from "@/data/recipe-entries-query";
import { useRef } from "react";

// apollo reactive variables are declared outside the component
const searchQuery = makeVar(undefined);
const queryRelatedTo = makeVar(undefined);

export default function Home() {
    const queryOffset = useRef(0);
    const queryOrderBy = useRef(undefined);

    const queryVariables = {
        section: ["recipes"],
        limit: 4,
        offset: queryOffset.current,
        search: useReactiveVar(searchQuery),
        orderBy: queryOrderBy.current,
        relatedTo: useReactiveVar(queryRelatedTo),
    };

    const { error, data, fetchMore } = useQuery(GET_RECIPE_ENTRIES, { variables: queryVariables });

    const handleLoadMore = () => {
        fetchMore({
            variables: {
                offset: (queryOffset.current = data.entries.length),
            },
        });
    };

    const handleSearchChange = (e) => {
        const inputValue = e.target.value;

        searchQuery(inputValue || undefined);
        queryOrderBy.current = inputValue ? "score" : undefined;
        queryOffset.current = 0;
    };

    const handleCategoryChange = (e) => {
        // create a new array if one doesn't exist
        // Craft category queries begin with the 'and' operator
        let checkedCategories = queryRelatedTo() ? [...queryRelatedTo()] : ['and'];

        const inputValue = Number(e.target.value);

        if (e.target.checked) {
            // add value if not already in array
            if (!checkedCategories.includes(inputValue)) {
                checkedCategories.push(inputValue);
            }
        } else {
            // remove value if it exists in array
            const index = checkedCategories.indexOf(inputValue);
			
            if (index > -1) {
                checkedCategories.splice(index, 1);
            }
        }

        // if there are no category filters, unset the variable
        if(checkedCategories.length == 1 && checkedCategories.includes('and')) {
            checkedCategories = undefined;
        }
        
        queryRelatedTo(checkedCategories);
		queryOffset.current = 0;
    };

    return (
        <>
            <Head>
                <title>The Crafty Cook</title>
            </Head>

            <GlobalHeader />

            <main>
                <section className="layout-section">
                    <div className="filters">
                        <SearchFilter
                            inputValue={searchQuery}
                            handleChange={handleSearchChange}
                        />

                        <CategoryFilter 
							handleChange={handleCategoryChange}
                            checkedCats={queryRelatedTo() || []}
						/>
                    </div>
                </section>

                <section className="layout-section">
                    <RecipeListing data={data} error={error} />

                    {data && data.entries.length < data.entryCount && (
                        <nav className="pager">
                            <button onClick={handleLoadMore}>Load More</button>
                        </nav>
                    )}
                </section>
            </main>

            <GlobalFooter />
        </>
    );
}
