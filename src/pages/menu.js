import * as React from 'react';
import Layout from '../components/layout';

const Menu = () => {
    return (
        <Layout>
            <section class="section">
                <p class="title">
                    Our Menu
                </p>
                <p class="subtitle">
                    Hero subtitle
                </p>

                <div class="columns is-vcentered">
                    <div class="column is-6" >
                        <p >COLUMN 6</p>
                    </div>
                    <div class="column is-6">
                        <p >COLUMN 6</p>
                    </div>

                </div>
                <div class="columns">
                    <div class="column is-7">
                        <h1>COLUMN 7</h1>
                    </div>
                    <div class="column is-5">
                        <p>COLUMN 5</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4">
                        <h1>COLUMN 4</h1>
                    </div>
                    <div class="column is-4">
                        <p>COLUMN 4</p>
                    </div>
                    <div class="column is-4">
                        <p>COLUMN 4</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export const Head = () => <title>Our Menu</title>


export default Menu;