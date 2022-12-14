import * as React from "react"
import Layout from "../components/layout";
import './mystyles.scss';
import LongImage from '../images/longimage.jpg';
import Cup from '../images/cupabout1.png'

const AboutPage = () => {
    return (
        <Layout>
            <section className="hero is-dark" name="top">
                <div className="hero-body">
                    <p className="title">
                        About Us at Bear's Cup
                    </p>
                </div>
            </section>
            <hr className="divider"></hr>
            <div className='tile is-ancestor'>
                <div className='tile is-parent '>
                    <div className='tile is-child box imageHero'>
                        <img className="longImage" src={LongImage}></img>
                        <div className="mySpan">" Happiness is not readymade, You must first wait for bear to brew it. "</div>
                    </div>
                </div>
            </div>
            <div className='tile is-ancestor'>
                <div className='tile is-parent '>
                    <div className='tile is-child box myNotification'>
                        <h1 className="title">Our Story</h1>
                        <div className="notification is-danger box">Image Icon Here </div>
                        <button className="button is-small is-primary">Read More</button>
                    </div>
                    <div className='tile is-child box myNotification'>
                        <h1 className="title">A&J's Beans</h1>
                        <div className="notification is-danger box ">Image Icon Here</div>
                        <button className="button is-small is-warning">Read More</button>
                    </div>
                    <div className='tile is-child box myNotification'>
                        <h1 className="title">How we give back</h1>
                        <div className="notification is-danger box">Image Icon Here</div>
                        <button className="button is-small is-success">Read More</button>
                    </div>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box" style={{ textAlign: "center", backgroundColor: '#dfbf83' }}>
                        Having served over 1 million cups of delicious coffee, here at Bear's Cup we aim to reach many millions more!
                    </div>
                </div>
            </div>
            <hr className="divider"></hr>
            <div className="hero">
                <div className="hero-head notification myNotification">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#top">About</a></li>
                        </ul>
                    </nav>
                    <div class="columns">
                        <div class="column">
                            <h1 className="title is-4">About Bear's Cup</h1>
                            <hr className="heroDivider"></hr>
                            <p>Use lap as chair hell is other people but stare at ceiling light, for fat baby cat best buddy little guy. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk but mewl for food at 4am.</p>
                        </div>
                        <div class="column">
                            <h1 className="title is-4">Bear News Today</h1>
                            <hr className="heroDivider"></hr>
                            <ul className="customList">
                                <li><a>3 New Locations Opening 2023!</a></li>
                                <li><a>Bears Cup of Coffee Named Shop of the Year</a></li>
                                <li><a>A&J's Beans wins best roast blend of 2022</a></li>
                                <li><a>First Location in CO starting reconstruction</a></li>
                                <li><a>Bear's Cup enters the Coffeethon!</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h1 className="title is-4">Bear Blogs</h1>
                            <hr className="heroDivider"></hr>
                            <ul className="customList">
                                <li><a>My First Time at Bears Cup</a></li>
                                <li><a>How I Fell in Love in a Coffee Shop</a></li>
                                <li><a>I Critiqued the Hottest Coffee Shop in Town</a></li>
                                <li><a>I Witnessed a Proposal at a Coffee Shop</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h1 className="title is-4">Follow Us</h1>
                            <hr className="heroDivider"></hr>
                            <ul className="customList">
                                <li><a>Facebook</a></li>
                                <li><a>Twitter</a></li>
                                <li><a>Instagram</a></li>
                                <li><a>TikTok</a></li>
                                <li><a>bearscupofservice@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-4">Links</h1>
                            <hr className="heroDivider"></hr>
                            <ul className="customList">
                                <li><a>Privacy Policy</a></li>
                                <li><a>Terms and Conditions</a></li>
                                <li><a>FAQs</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="hero-foot">
                        <p className="myFooter">Copyright © Bear's Cup of Coffee 2022.</p>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage;
