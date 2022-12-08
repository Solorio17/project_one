import * as React from "react"
import Layout from "../components/layout";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//this is the website application's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACmhuH5xZPrFvmNBis8yVhBkyIY7O42vA",
  authDomain: "project-two-10b81.firebaseapp.com",
  projectId: "project-two-10b81",
  storageBucket: "project-two-10b81.appspot.com",
  messagingSenderId: "880831868881",
  appId: "1:880831868881:web:d096e19ccdec760e0c3af0",
  measurementId: "G-QTP3XEGQ8M"
};

//initialize the firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

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
