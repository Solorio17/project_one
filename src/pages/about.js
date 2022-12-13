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
                    <div className='tile is-child box'>
                        <h1 className="title">Our Story</h1>
                        <div className="notification is-danger box">Image Icon Here </div>
                        <button className="button is-small is-primary">Read More</button>
                    </div>
                    <div className='tile is-child box'>
                        <h1 className="title">A&J's Beans</h1>
                        <div className="notification is-danger box">Image Icon Here</div>
                        <button className="button is-small is-warning">Read More</button>
                    </div>
                    <div className='tile is-child box'>
                        <h1 className="title">How we give back</h1>
                        <div className="notification is-danger box">Image Icon Here</div>
                        <button className="button is-small is-success">Read More</button>
                    </div>
                </div>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        Having served over 1 million cups of delicious coffee, here at Bear's Cup we aim to reach many millions more!
                    </div>
                </div>
            </div>
            <hr className="divider"></hr>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#top">About</a></li>
                                <li class="is-active"><a href="#" aria-current="page">About Bear's Cup</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="hero-body is-dark notification">
                <div class="columns">
                    <div class="column">
                        <h1 className="title is-4">About Bear's Cup</h1>
                        <hr></hr>
                        <p>
                            Use lap as chair hell is other people but stare at ceiling light, for fat baby cat best buddy little guy. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk but mewl for food at 4am.
                        </p>
                    </div>
                    <div class="column">
                        <h1 className="title is-4">Bear News Today</h1>
                        <hr></hr>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h1 className="title is-4">Bear Blogs</h1>
                        <hr></hr>

                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h1 className="title is-4">Follow Us</h1>
                        <hr></hr>

                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <h1 className="title is-4">Links</h1>
                        <hr></hr>

                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
            </div>



        </Layout>
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage;
