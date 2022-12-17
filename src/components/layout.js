import React, { useState, useEffect } from 'react'
import '../pages/mystyles.scss';
import { auth } from '../pages/index';

import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    sendEmailVerification
} from 'firebase/auth';

const Layout = ({ children }) => {
    const [isToggleOn, changeToggle] = useState(true);
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

    const [resetPassDropdown, setResetPassDropdown] = useState(false);
    const showresetDropdown = () => {
        setResetPassDropdown(!resetPassDropdown)
    }

    const [newPassword, setNewPassword] = useState('');


    //open login/signup forms
    const openForms = () => {
        setRegisterModalIsOpen(!registerModalIsOpen)
    }

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerName, setRegisterName] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

    }, [])

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            await updateProfile(auth.currentUser, { displayName: registerName });
            await sendEmailVerification(auth.currentUser);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
        window.location.reload()
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
        } catch (error) {
            alert(error.message);
        }
        window.location.reload()

    }

    const logout = async () => {
        await signOut(auth)
        window.location.reload()

    }

    const resetPassword = async () => {
        try {
            const message = await sendPasswordResetEmail(auth, newPassword);
            console.log(message)
        } catch (err) {
            alert(err)
        }
    }


    console.log('current user', user)

    return (
        <div>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" style={{ color: "wheat" }} href="/">
                        BEAR'S CUP OF COFFEE
                    </a>

                    <a role="button" className={isToggleOn ? 'navbar-burger is-active' : 'navbar-burger'} aria-expanded="false" onClick={() => changeToggle(!isToggleOn)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
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
                            {user ?
                                <>
                                    <h1 style={{ marginRight: '10px' }}>Hey There, {user ? user.displayName : 'Not Logged In!'}</h1>
                                    <button className="button is-danger is-small" onClick={logout}>Sign Out</button>
                                </>
                                :
                                <>
                                    <button className='button is-light is-small' onClick={openForms}>Login</button>
                                    <button className='button is-black is-small' onClick={openForms}>Sign Up</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav >
            <div className={registerModalIsOpen ? 'modal is-active' : 'modal'}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <section className="hero is-fullheight" style={{ backgroundColor: "wheat" }}>
                        <div className="hero-body">
                            <div className='container'>
                                <h1>Create a new account!</h1>
                                <input className="input is-small" placeholder="Email" onChange={(event) => { setRegisterEmail(event.target.value) }}></input>
                                <input className="input is-small" placeholder="Password" onChange={(event) => { setRegisterPassword(event.target.value) }}></input>
                                <input className="input is-small" placeholder="Name" onChange={(event) => { setRegisterName(event.target.value) }}></input>
                                <button className="button is-info is-small" onClick={register}>Create Account</button>
                            </div>

                            <hr></hr>
                            <div className='container'>
                                <h1>Login into existing account!</h1>
                                <input className="input is-small" placeholder="Email" onChange={(event) => { setLoginEmail(event.target.value) }}></input>
                                <input className="input is-small" placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value) }}></input>
                                <button className="button is-success is-small" onClick={login}>Log In</button>
                                <div className={resetPassDropdown ? 'dropdown is-active' : 'dropdown'}>
                                    <div className="dropdown-trigger">
                                        <button className="button is-small is-primary">
                                            <span onClick={showresetDropdown}>Forgot Password?</span>
                                        </button>
                                    </div>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-content">
                                            <input className='input is-small' placeholder='your email' onChange={(event) => { setNewPassword(event.target.value) }}></input>
                                            <hr className="dropdown-divider"></hr>
                                            <button className='button is-small is-link' onClick={resetPassword}>Reset Password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={openForms}></button>
            </div>

            <main>
                {children}
            </main>
        </div >
    )
}




// class Layout extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isToggleOn: true,
//         };

//         //the binding is necessary to make 'this' work in the callback (in this example in the onClick)
//         this.changeToggle = this.changeToggle.bind(this)
//     }

//     changeToggle() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
//                     <div className="navbar-brand">
//                         <a className="navbar-item" style={{ color: "wheat" }} href="/">
//                             BEAR'S CUP OF COFFEE
//                         </a>

//                         <a role="button" className={this.state.isToggleOn ? 'navbar-burger is-active' : 'navbar-burger'} aria-expanded="false" onClick={this.changeToggle}>
//                             <span aria-hidden="true"></span>
//                             <span aria-hidden="true"></span>
//                             <span aria-hidden="true"></span>
//                         </a>
//                     </div>

//                     <div className={this.state.isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
//                         <div className="navbar-start">
//                             <a className="navbar-item" href='/menu'>
//                                 Our Menu
//                             </a>

//                             <div className="navbar-item has-dropdown is-hoverable">
//                                 <a className="navbar-link">
//                                     More
//                                 </a>

//                                 <div className="navbar-dropdown">
//                                     <a className="navbar-item" href='/about'>
//                                         About Us
//                                     </a>
//                                     <a className="navbar-item" href='/careers'>
//                                         Careers
//                                     </a>
//                                     <hr className="navbar-divider"></hr>
//                                     <a className="navbar-item" href='/feedback'>
//                                         Give us Feedback!
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="navbar-end">
//                             <div className="navbar-item">
//                                 <div className="buttons">
//                                     <a className="button is-small is-dark">
//                                         <strong>Sign up</strong>
//                                     </a>
//                                     <a className="button is-small is-light">
//                                         Log in
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav >

//                 <main>
//                     {this.props.children}
//                 </main>
//             </div >
//         )
//     }
// }


export default Layout