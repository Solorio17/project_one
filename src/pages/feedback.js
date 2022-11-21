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
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Your Username"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Email input"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Your Message..."></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox"></input>
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Feedback;