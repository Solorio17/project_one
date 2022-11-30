import React, { useState } from 'react'
import '../pages/mystyles.scss';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true,
        };

        //the binding is necessary to make 'this' work in the callback (in this example in the onClick)
        this.changeToggle = this.changeToggle.bind(this)
    }

    changeToggle() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" style={{ color: "wheat" }} href="/">
                            BEAR'S CUP OF COFFEE
                        </a>

                        <a role="button" className={this.state.isToggleOn ? 'navbar-burger is-active' : 'navbar-burger'} aria-expanded="false" onClick={this.changeToggle}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className={this.state.isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
                        <div className="navbar-start">
                            <a className="navbar-item" href='/menu'>
                                Our Menu
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    More
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item" href='/about'>
                                        About Us
                                    </a>
                                    <a className="navbar-item" href='/careers'>
                                        Careers
                                    </a>
                                    <hr className="navbar-divider"></hr>
                                    <a className="navbar-item" href='/feedback'>
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
                </nav >

                <main>
                    {this.props.children}
                </main>
            </div >
        )
    }
}






// const Layout = ({ children }) => {
//     const [isToggleOn, changeToggle] = useState(true);

//     return (
//         <div>
//             <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
//                 <div className="navbar-brand">
//                     <a className="navbar-item" style={{ color: "wheat" }} href="/">
//                         BEAR'S CUP OF COFFEE
//                     </a>

//                     <a role="button" className={isToggleOn ? 'navbar-burger is-active' : 'navbar-burger'} aria-expanded="false" onClick={() => changeToggle(!isToggleOn)}>
//                         <span aria-hidden="true"></span>
//                         <span aria-hidden="true"></span>
//                         <span aria-hidden="true"></span>
//                     </a>
//                 </div>

//                 <div className={isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
//                     <div className="navbar-start">
//                         <a className="navbar-item" href='/menu'>
//                             Our Menu
//                         </a>

//                         <div className="navbar-item has-dropdown is-hoverable">
//                             <a className="navbar-link">
//                                 More
//                             </a>

//                             <div className="navbar-dropdown">
//                                 <a className="navbar-item" href='/about'>
//                                     About Us
//                                 </a>
//                                 <a className="navbar-item" href='/careers'>
//                                     Careers
//                                 </a>
//                                 <hr className="navbar-divider"></hr>
//                                 <a className="navbar-item" href='/feedback'>
//                                     Give us Feedback!
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="navbar-end">
//                         <div className="navbar-item">
//                             <div className="buttons">
//                                 <a className="button is-small is-dark">
//                                     <strong>Sign up</strong>
//                                 </a>
//                                 <a className="button is-small is-light">
//                                     Log in
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav >

//             <main>
//                 {children}
//             </main>
//         </div >
//     )
// }


export default Layout