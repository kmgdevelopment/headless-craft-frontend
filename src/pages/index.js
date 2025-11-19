import Head from "next/head";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import EntryListing from "@/components/EntryListing";
import SearchFilter from "@/components/SearchFilter";
import CategoryFilter from "@/components/CategoryFilter";

import { useQuery } from '@apollo/client/react';
import GET_RECIPE_ENTRIES from "@/data/recipe-entries-query";
import { useRef } from "react";

export default function Home() {
  const queryOffset = useRef(0);

  const queryVariables = {
    section: ['recipes'],
    limit: 4,
    offset: queryOffset.current
  }

  const { error, data, fetchMore } = useQuery(GET_RECIPE_ENTRIES, { variables: queryVariables });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: queryOffset.current = data.entries.length
      }
    });
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
            <SearchFilter />

            <CategoryFilter />
          </div>
        </section>

        <section className="layout-section">
          <EntryListing 
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
