import React, { useState, useEffect } from "react"
import Layout from "../components/layout";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// this is the website application's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACmhuH5xZPrFvmNBis8yVhBkyIY7O42vA",
  authDomain: process.env.GATSBY_AUTHDOMAIN,
  projectId: "project-two-10b81",
  storageBucket: process.env.GATSBY_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
  appId: process.env.GATSBY_APPID,
  measurementId: process.env.GATSBY_MEASUREMENTID
};

//initialize the firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

const HomePage = () => {

  return (
    <Layout>

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
