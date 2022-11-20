import * as React from "react"
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout>
      <section class="hero is-fullheight" style={{ backgroundColor: "wheat" }}>
        <div class="hero-body">
          <p class="title">
            BEAR'S CUP OF COFFEE
          </p>
          <p class="subtitle">
            " Happiness is not something readymade, you must first wait for bear to make it. "
          </p>
        </div>
      </section>
      <section class="hero is-fullheight" style={{ backgroundColor: "brown" }}>
        <div class="hero-body">
          <p class="title">
            BEAR'S CUP OF COFFEE
          </p>
          <p class="subtitle">
            " Happiness is not something readymade, you must first wait for bear to make it. "
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default HomePage;
