import Head from "next/head";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import RecipeListing from "@/components/RecipeListing";
import SearchFilter from "@/components/SearchFilter";
import CategoryFilter from "@/components/CategoryFilter";

import { useQuery, useReactiveVar } from '@apollo/client/react';
import { makeVar } from "@apollo/client";
import GET_RECIPE_ENTRIES from "@/data/recipe-entries-query";
import { useRef, useState } from "react";

const searchQuery = makeVar(undefined);

export default function Home() {
  const queryOffset = useRef(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const queryVariables = {
    section: ['recipes'],
    limit: 4,
    offset: queryOffset.current,
    search: useReactiveVar(searchQuery)
  }

  const { error, data, fetchMore } = useQuery(GET_RECIPE_ENTRIES, { variables: queryVariables });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: queryOffset.current = data.entries.length
      }
    });
  }

  const handleSearchChange = (e) => {
    searchQuery(e.target.value);
  }

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
              searchValue={searchQuery}
              handleSearchChange={handleSearchChange}
            />

            <CategoryFilter />

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
          </div>
        </section>

        <section className="layout-section">
          <RecipeListing 
            data={data} 
            error={error}
          />

          {data && data.entries.length < data.entryCount &&
            <nav className="pager">
              <button onClick={handleLoadMore}>Load More</button>
            </nav>
          }
        </section>
        
      </main>

      <GlobalFooter />
    </>
  );
}
