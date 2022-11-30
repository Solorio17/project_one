import * as React from 'react';
import Layout from '../components/layout';

const Feedback = () => {
    return (
        <Layout>
            <section className='hero is-dark'>
                <div className='hero-body'>
                    <p className='title'>Please Give Us Feedback!</p>
                </div>
            </section>

            <section className='section'>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Name"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Email input"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Your Message..."></textarea>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox"></input>
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Feedback;