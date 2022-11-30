import * as React from 'react';
import Layout from '../components/layout';

const Careers = () => {
    return (
        <Layout>
            <section className='hero is-dark'>
                <div className='hero-body'>
                    <p className='title'> Careers With Us</p>

                </div>
            </section>
            <nav class="panel">
                <p class="panel-heading">
                    Location: 100 Bear Drive, Cave Avenue, CO 80001
                </p>
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Search"></input>
                    </p>
                </div>
                <p class="panel-tabs">
                    <a class="is-active">All</a>
                    <a>Manager</a>
                    <a>Crew</a>
                </p>
                <a class="panel-block is-active">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Lead Manager (Shift Manager)
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Crew Member II (Bearista Specialist)
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    Crew Member (Training Bearista, Cashier/Order Taker)
                </a>

                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-code-branch" aria-hidden="true"></i>
                    </span>
                    Janitorial (! Please talk to Manager for this position !)
                </a>
                <div class="panel-block">
                    <button class="button is-link is-outlined is-fullwidth">
                        Reset all filters
                    </button>
                </div>
            </nav>
        </Layout>
    )
};

export default Careers;