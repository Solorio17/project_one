import * as React from "react"
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout >
            <section class="hero is-dark">
                <div className="hero-body">
                    <p class="title">
                        About Us
                    </p>
                </div>
            </section>

            <div class="columns is-vcentered">
                <div class="column is-6" >
                    <p>Insert a short inspirational quote or a phrase about us</p>
                </div>
                <div class="column is-6">
                    <p>Insert a picture here about something relevant. ex: cup of coffee</p>
                </div>

            </div>
            <div class="columns">
                <div className="column is 2">
                    Here Insert a color or logo or picture
                </div>
                <div class="column is-8">
                    <h1>Here in the middle is where i want to add about us and how we became to be. our start up story basically</h1>
                </div>
                <div class="column is-2">
                    <p>Same here as the other side a picture logo or phrase</p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-4">
                    <h1>Customer Testimonial</h1>
                </div>
                <div class="column is-4">
                    <p>Customer Testimonial</p>
                </div>
                <div class="column is-4">
                    <p>Customer Testimonial</p>
                </div>
            </div>
            <div className="columns">
                <div className="column is-6">
                    <p>Here I can insert maybe like a picture of the store or map</p>
                </div>
                <div className="column is-6">
                    <p>Here I can Insert some sort of information</p>
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
