import Head from "next/head";
import Image from "next/image";
import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";

import { useRouter } from "next/router";
import Error from "next/error";
import parse from 'html-react-parser';
import { useQuery } from "@apollo/client/react";
import GET_SINGLE_RECIPE from "@/data/single-recipe-query";

export default function Recipe() {
  const router = useRouter();
  const { slug } = router.query;

  const queryVariables = {
    'section': ['recipes'],
    'slug': slug
  }

  const { error, data } = useQuery(GET_SINGLE_RECIPE, { variables: queryVariables });

  // prevent an error if the component mounts before the data has loaded
  if (!data) return null;

  // if there was a GraphQL error log it and return a message to the user
  if(error) {
    console.error(error);
    return <p>There was an error fetching the entry.</p>;
  }

  // make it so we don't need to type data.entry for every variable
  const entry = data.entry;

  // if the entry does not exist throw a 404
  if(entry === null) {
    return <Error statusCode="404" />
  }

  return (
    <>
      <Head>
        <title>{entry.title} | The Crafty Cook</title>
      </Head>

      <GlobalHeader />
      
      <main className="recipe-entry">
        <header>
          <div className="layout-section">
            <h1>{entry.title}</h1>
            <Image src={entry.image[0].url} alt={entry.title} width="1440" height="960" />
          </div>
        </header>

        <div className="body">
          <div className="layout-section">
            <section className="ingredient-list">
              <h2>Ingredients</h2>
              <ul>
                {entry.ingredients.map( (row, index) => (
                  <li key={index}>
                    {row.quantity} {row.ingredient}{row.preparation && ', ' + row.preparation}
                  </li>
                ))}
              </ul>
            </section>
            <section className="instructions">
              <h2>Instructions</h2>
              { parse(entry.instructions.rawHtml) }
            </section>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </>
  );
}
