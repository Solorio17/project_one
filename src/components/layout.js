import * as React from 'react'
import '../pages/mystyles.scss';

// const burgerIcon = document.getElementById('#burger');
// const navbarMenu = document.getElementById('#nav-links');

// window.onload = function () {
//     burgerIcon.addEventListener('click', () => {
//         console.log('im clicked')
//         navbarMenu.classList.toggle('is-active');
//     });
// }

const Layout = ({ pageTitle, children }) => {

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" style={{ color: "brown" }} href="/">
                        BEAR'S CUP OF COFFEE
                    </a>

                    <a role="button" className="navbar-burger" aria-label="navbar-menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu" id="navLinks">
                    <div className="navbar-start">
                        <a className="navbar-item" href='/menu'>
                            Our Menu
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item" href='/about'>
                                    About Us
                                </a>
                                <a class="navbar-item">
                                    Careers
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider"></hr>
                                <a class="navbar-item">
                                    Give us Feedback!
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-small is-dark">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-small is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout