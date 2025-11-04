import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import DocumentHead from "@/components/DocumentHead";
import DocumentFoot from "@/components/DocumentFoot";

import { useQuery } from '@apollo/client/react';
import GET_RECIPE_ENTRIES from "@/data/recipe-entries-query";

export default function Home() {
  const items = [1,2,3,4];

  const queryVariables = {
    section: ['recipes']
  }

  const { error, data } = useQuery(GET_RECIPE_ENTRIES, { variables: queryVariables });

  if (!data) return null;

  if (error) {
    console.error(error);
    return <p>There was an error fetching the entries.</p>;
  }

  return (
    <>
      <Head>
        <title>The Crafty Cook</title>
      </Head>

      { DocumentHead() }
      
      <main>
        <section className="layout-section">
          <div className="filters">
            <div className="search-filter">
              <input id="search" name="search" type="search" />
            </div>

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
          <div className="listing">
            { data.entries.map( (entry) => (
                <div className="item" key={entry.id}>
                  <a href={entry.uri} className="recipe-card">
                    <div className="media">
                      <Image src={entry.image[0].url} alt={entry.title} width="500" height="250" />
                    </div>
                    <h6>{entry.title}</h6>
                  </a>
                </div>
            )) }
          </div>

          <nav className="pager">
            <span>&laquo; Prev</span>
            <Link href="#">Next &raquo;</Link>
          </nav>
        </section>
        
      </main>

      { DocumentFoot() }
    </>
  );
}
