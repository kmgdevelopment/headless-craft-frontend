import Head from "next/head";
import Image from "next/image";
import DocumentHead from "@/components/DocumentHead";
import DocumentFoot from "@/components/DocumentFoot";

export default function Recipe() {
  return (
    <>
      <Head>
        <title>Peanut Sesame Noodles | The Crafty Cook</title>
      </Head>

      { DocumentHead() }
      
      <main class="recipe-entry">
        <header>
          <div class="layout-section">
            <h1>Peanut Sesame Noodles</h1>
            <img src="/assets/img/recipe-placeholder.jpg" alt="placeholder image" width="1440" height="960" />
          </div>
        </header>

        <div class="body">
          <div class="layout-section">
            <section class="ingredient-list">
              <h2>Ingredients</h2>
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Amet</li>
              </ul>
            </section>
            <section class="instructions">
              <h2>Instructions</h2>
              <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nostrum quis. Quam eveniet nulla praesentium ipsum consequatur, aliquid temporibus vitae.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat possimus in a eum architecto. Repellendus.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, exercitationem nihil neque itaque unde doloribus. Minus, rerum.</li>
              </ol>
            </section>
          </div>
        </div>
      </main>

      { DocumentFoot() }
    </>
  );
}
