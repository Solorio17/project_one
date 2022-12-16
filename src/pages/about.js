import React, { useState } from "react"
import Layout from "../components/layout";
import './mystyles.scss';
import LongImage from '../images/longimage.jpg';
import Cup from '../images/cupabout1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoon, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => {

    const [ourStoryIsOpen, setOurStoryIsOpen] = useState(false);
    const [ajsBeansIsOpen, setAjsBeansIsOpen] = useState(false);
    const [givebackIsOpen, setGivebackIsOpen] = useState(false);

    const ourStoryToggle = () => {
        setOurStoryIsOpen(!ourStoryIsOpen)
    }
    const ajsBeansToggle = () => {
        setAjsBeansIsOpen(!ajsBeansIsOpen)
    }
    const givebackToggle = () => {
        setGivebackIsOpen(!givebackIsOpen)
    }

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
            <div className="container" style={{ marginBottom: '2%' }}>
                <div className='tile is-ancestor'>
                    <div className='tile is-parent '>
                        <div className='tile is-child imageHero'>
                            <img className="longImage" src={LongImage}></img>
                            <div className="mySpan">" Happiness is not readymade, You must first wait for bear to brew it. "</div>
                        </div>
                    </div>
                </div>

                <div class="columns is-5">
                    <div class="column">
                        <div class="myNotification has-text-centered">
                            <h1 className="title">Our Story</h1>
                            <div className="box myNotification">
                                <FontAwesomeIcon icon={faCoffee} size="10x" />
                            </div>
                            <button className="button is-small is-dark myBtn" onClick={ourStoryToggle}>Read More</button>
                        </div>
                    </div>
                    <div class="column">
                        <div class="myNotification has-text-centered">
                            <h1 className="title">A&J's Beans</h1>
                            <div className="box myNotification">
                                <FontAwesomeIcon icon={faMoon} size="10x" />
                            </div>
                            <button className="button is-small is-dark myBtn" onClick={ajsBeansToggle}>Read More</button>
                        </div>
                    </div>
                    <div class="column">
                        <div class="myNotification has-text-centered">
                            <h1 className="title">How We Give Back!</h1>
                            <div className="box myNotification">
                                <FontAwesomeIcon icon={faHandHoldingHeart} size="10x" />

                            </div>
                            <button className="button is-small is-dark myBtn" onClick={givebackToggle}>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box myTile">
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
                                <p>for fat baby cat best buddy little guy. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk but mewl for food at 4am.</p>

                            </div>
                            <div class="column">
                                <h1 className="title is-4">Bear News Today</h1>
                                <hr className="heroDivider"></hr>
                                <ul className="customList">
                                    <li><a>3 New Locations Opening 2023!</a></li>
                                    <li><a>Bears Cup of Coffee Named Shop of the Year</a></li>
                                    <li><a>A&J's Beans wins best roast blend of 2022</a></li>
                                    <li><a>First Location in CO starting remodeling</a></li>
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
                                <div>
                                    <h1 className="title is-4">Links</h1>
                                    <hr className="heroDivider"></hr>
                                    <ul className="customList">
                                        <li><a>Privacy Policy</a></li>
                                        <li><a>Terms and Conditions</a></li>
                                        <li><a>FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="hero-foot">
                            <p className="myFooter">Copyright © Bear's Cup of Coffee 2022.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={ourStoryIsOpen ? 'modal is-active' : 'modal'}>
                <div class="modal-background ourstoryModal"></div>
                <div class="modal-content">
                    <section className="hero is-large">
                        <div className="notification ourstoryModal">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <div className="tile is-child notification ourstoryNotif">
                                        <h1 className="title">Our Story at Bear's Cup of Coffee</h1>
                                        <p>
                                            Meoooow cough furball into food bowl then scratch owner for a new one. Cats are a queer kind of folk relentlessly pursues moth. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sleeps on my head mark territory. Paw at beetle and eat it before it gets away i'm going to lap some water out of my master's cup meow, lick human with sandpaper tongue scratch lick sellotape, refuse to come home when humans are going to bed;
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">A&J's Beans</h1>
                                        <p>
                                            Meoooow cough furball into food bowl then scratch owner for a new one. Cats are a queer kind of folk relentlessly pursues moth. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sleeps on my head mark territory. Paw at beetle and eat it before it gets away i'm going to lap some water out of my master's cup meow, lick human with sandpaper tongue scratch lick sellotape, refuse to come home when humans are going to bed;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={ourStoryToggle}></button>
            </div>
            <div className={ajsBeansIsOpen ? 'modal is-active' : 'modal'}>
                <div class="modal-background ajsbeansModal"></div>
                <div class="modal-content">
                    <section className="hero is-large">
                        <div className="notification ajsbeansModal">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <div className="tile is-child notification ajsbeansNotif">
                                        <h1 className="title">A&J's Beans</h1>
                                        <p>
                                            Meoooow cough furball into food bowl then scratch owner for a new one. Cats are a queer kind of folk relentlessly pursues moth. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sleeps on my head mark territory. Paw at beetle and eat it before it gets away i'm going to lap some water out of my master's cup meow, lick human with sandpaper tongue scratch lick sellotape, refuse to come home when humans are going to bed;
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">A&J's Beans</h1>
                                        <p>
                                            Meoooow cough furball into food bowl then scratch owner for a new one. Cats are a queer kind of folk relentlessly pursues moth. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sleeps on my head mark territory. Paw at beetle and eat it before it gets away i'm going to lap some water out of my master's cup meow, lick human with sandpaper tongue scratch lick sellotape, refuse to come home when humans are going to bed;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={ajsBeansToggle}></button>
            </div>
            <div className={givebackIsOpen ? 'modal is-active' : 'modal'}>
                <div class="modal-background givebackModal"></div>
                <div class="modal-content">
                    <section className="hero is-large">
                        <div className="notification givebackModal">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <div className="tile is-child notification givebackNotif">
                                        <h1 className="title">How we Give Back to our Earth!</h1>
                                        <p>
                                            Meoooow cough furball into food bowl then scratch owner for a new one. Cats are a queer kind of folk relentlessly pursues moth. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sleeps on my head mark territory. Paw at beetle and eat it before it gets away i'm going to lap some water out of my master's cup meow, lick human with sandpaper tongue scratch lick sellotape, refuse to come home when humans are going to bed;
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">How we Give Back to our Earth!</h1>
                                        <p>
                                            Meoooow cough furball into food bowl then scratch owner for a new one. Cats are a queer kind of folk relentlessly pursues moth. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sleeps on my head mark territory. Paw at beetle and eat it before it gets away i'm going to lap some water out of my master's cup meow, lick human with sandpaper tongue scratch lick sellotape, refuse to come home when humans are going to bed;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={givebackToggle}></button>
            </div>

        </Layout>
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage;
