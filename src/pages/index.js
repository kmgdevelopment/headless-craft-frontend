import Head from "next/head";
import Link from "next/link";
import DocumentHead from "@/components/DocumentHead";
import DocumentFoot from "@/components/DocumentFoot";

export default function Home() {
  const items = [1,2,3,4];

  return (
    <>
      <Head>
        <title>The Crafty Cook</title>
      </Head>

      { DocumentHead() }
      
      <main>
        <section class="layout-section">
          <div class="filters">
            <div class="search-filter">
              <input id="search" name="search" type="search" />
            </div>

            <div class="category-filter">
              <div class="fieldgroup">
                <input type="checkbox" id="vegan" name="vegan" />
                <label for="vegan">Vegan</label>
              </div>
              <div class="fieldgroup">
                <input type="checkbox" id="gluten-free" name="gluten-free" />
                <label for="gluten-free">Gluten Free</label>
              </div>
              <div class="fieldgroup">
                <input type="checkbox" id="low-carb" name="low-carb" />
                <label for="low-carb">Low Carb</label>
              </div>
              <div class="fieldgroup">
                <input type="checkbox" id="low-sodium" name="low-sodium" />
                <label for="low-sodium">Low Sodium</label>
              </div>
            </div>
          </div>
        </section>

        <section class="layout-section">
          <div class="listing">
            { items.map( (item) => (
                <div class="item" key="item-{item}">
                  <a href="#" class="recipe-card">
                    <div class="media">
                      <img src="/assets/img/recipe-placeholder.jpg" alt="placeholder image" width="500" height="250" />
                    </div>
                    <h6>Peanut Sesame Noodles</h6>
                  </a>
                </div>
            )) }
          </div>

          <nav class="pager">
            <span>1</span>
            <Link href="#">2</Link>
          </nav>
        </section>
        
      </main>

      { DocumentFoot() }
    </>
  );
}
