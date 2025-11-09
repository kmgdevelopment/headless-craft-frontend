import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";

export default function Home() {
  const items = [1,2,3,4];

  return (
    <>
      <Head>
        <title>The Crafty Cook</title>
      </Head>

      { GlobalHeader() }
      
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
            { items.map( (item) => (
                <div className="item" key={item}>
                  <a href="/recipes/test-recipe" className="recipe-card">
                    <div className="media">
                      <Image src="/assets/img/recipe-placeholder.jpg" alt="placeholder image" width="500" height="250" />
                    </div>
                    <h6>Peanut Sesame Noodles</h6>
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

      { GlobalFooter() }
    </>
  );
}
