import * as React from "react"
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="hero is-fullheight" style={{ backgroundColor: "wheat" }}>
        <div className="hero-body">
          <p className="title">
            BEAR'S CUP OF COFFEE
          </p>
          <p className="subtitle">
            " Happiness is not something readymade, you must first wait for bear to make it. "
          </p>
        </div>
      </section>
      <section className="hero is-fullheight" style={{ backgroundColor: "brown" }}>
        <div className="hero-body">
          <p className="title">
            BEAR'S CUP OF COFFEE
          </p>
          <p className="subtitle">
            " Happiness is not something readymade, you must first wait for bear to make it. "
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default HomePage;
