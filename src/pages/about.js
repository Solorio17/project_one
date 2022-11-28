import * as React from "react"
import Layout from "../components/layout";
import './mystyles.scss';
import FirstImage from '../images/roastedcoffee.jpg';

const AboutPage = () => {
    return (
        <Layout >
            <section className="hero is-dark">
                <div className="hero-body">
                    <p className="title">
                        About Us
                    </p>
                </div>
            </section>

            <div className="columns is-gapless is-vcentered inspoOne">
                <div className="column is-6">
                    <p>"This is the part where you enjoy your coffee."</p>
                </div>
                <div className="column is-6">
                    <img src={FirstImage} style={{ height: 'auto', width: '100vw' }}></img>
                </div>
            </div>

            <div className="columns is-gapless ">
                <div className="column is-2 logo">
                    <p>B</p>
                    <p>C</p>
                    <p>O</p>
                    <p>C</p>
                </div>
                <div className="column is-8">
                    <h1 className="ourstory">Bears Cup of Coffee came to life through the idea of the bear himself.
                        "Meow Meow Meow meow Meow  Meow Meow Meow Meow"
                        ("I Always saw my mother drink expensive cheap coffee, she had spent
                        thousands of dollars, and I knew I needed to take action.
                        "). 5 Great Roasts to Choose from, we sought to curate the best blend
                        of coffee beans and happiness. Each blend has great unique flavors and
                        will take your coffee drinking experience to the next level.</h1>
                </div>
                <div className="column is-2 logo">
                    <p>"MAKE YOUR MORNINGS RIGHT."</p>
                </div>
            </div>
            <div className="columns">
                <div className="column is-4 tstmnl">
                    <h1>" I am a first time customer here and I must say that i'm really enjoying this place." - Maria</h1>
                </div>
                <div className="column is-4 tstmnl">
                    <p>" I've been drinking coffee for about 15 years now, and its crazy to say that i've never tried coffee like this." - Dean</p>
                </div>
                <div className="column is-4 tstmnl">
                    <p>" I don't often drink coffee because it makes me jittery, so I really like their refreshment options. " - Barry</p>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6">
                    <p>Directions: 100 Bear Drive, Cave Avenue, CO 80001</p>
                </div>
                <div className="column is-6">
                    {/* <img src={Cup}></img> */}
                </div>
            </div>
            <div className="columns">
                <div className="column is-12">
                    <p>Here is the footer action</p>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage;
