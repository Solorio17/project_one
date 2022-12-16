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
                                            <h1>
                                                Believe it or not, the first cups of coffee we sold were out of our old home's garage here in CO.
                                                We Began receiving lots of great feedback from our close friends and family and we knew
                                                we needed to scale. With great support from rounds of funding we were able to open
                                                our first brick and mortar in 2018. It has been great to keep receiving support
                                                from our loyal customers. We love our job because you love our coffee!
                                            </h1>
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">Meet Bear</h1>
                                        <p>
                                            A&J's Beans was already succesful prior to this (more here),
                                            So bear had an idea to create a partership to bring this coffee to
                                            customers' hands. We were only doing retail at the time.
                                            Anyways, bear has prior succesful business ventures and
                                            elite marketing experience so he was a key piece in the creation of
                                            bears cup. This landed him in the cover of Greatness Magazine. Bear
                                            is always looking for ways to innovate and improve our business, and
                                            creating lifelong parterships as well as build lifelong customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={ourStoryToggle}></button>
            </div >
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
                                            A&J's Beans started in an online mom&pop shop.(Ayanna & Jason) in 2010. At
                                            first we weren't receiving the attention we hoped to get. But with
                                            the rise of social media and with bears elite marketing experience
                                            we were able to receive more and more attention and praisings from customers.
                                            Those first thousand bags were probably the most difficult to sell and produce.
                                            With our investing we opened our first mill, and we were able to hire a great
                                            team and that allowed us to being wholesale. Now we just opened our second mill
                                            last year and we hope to reach many more people.
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">About Us</h1>
                                        <p>
                                            "Coffee was always something I drank, Iced coffee is my absolute fav,
                                            but I started to notice that I was spending far too much money everyday.
                                            I had savings from my successful beauty care salon. And decided to invest in
                                            this Idea. - Ayanna"
                                            <hr></hr>
                                            "I must be honest before I met Ayanna I never really drank coffee. But the more
                                            time I spent time with her and with seeing all the hundreds of coffee cups I saw her
                                            drink. I eventually gave in. I also enjoy iced coffee, but I really pushed for us
                                            to have other options and thats when we introduced our refreshers. - Jason"
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
                                            Having experienced so much support from our friends and family, to our investors,
                                            and now all our customers. We wanted to give back too! So we deciced that with
                                            every cup of coffee sold in our stores, we would donate 10% of that sale
                                            to Our Purpose Our Earth Foundation. And another 10% to Coffee Us Co.
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">About Our Purpose Our Earth</h1>
                                        <p>
                                            Our Purpose Our Earth is a nonprofit organization that focuses on giving
                                            back to our great green earth. With the funding we receive we use 100% of
                                            that to plant trees, provide clean water to communites with no potable water by
                                            builing pipelines, and we also help build schools to help everyone get an education.
                                        </p>
                                        <hr></hr>
                                        <h1 className="title">About Coffee Us Co.</h1>
                                        <p>
                                            Also a nonprofit organization coffee us co, heavily focuses in sourcing the best
                                            raw materials and best equipment to keep providing our customers with the best
                                            coffee possible. Everything has been made possible through our loyal customers
                                            along with every new customer we receive every day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={givebackToggle}></button>
            </div>

        </Layout >
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage;
