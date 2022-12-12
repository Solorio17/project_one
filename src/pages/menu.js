

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { db } from './index';
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import './mystyles.scss'
import EditPage from './editpage';


const Menu = () => {
    const [isModalOpen, setModalToggle] = useState(true)

    const [modalData, setModalData] = useState({})

    // <create drink form state>
    const [newDrink, setNewDrink] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    // </create drink form state>

    const [drinks, setDrinks] = useState([]);
    const drinksCollectionRef = collection(db, "drinks");

    // <create drink function>
    const createDrink = async () => {
        await addDoc(drinksCollectionRef, { name: newDrink, size: Number(newSize), price: Number(newPrice) });
        window.location.reload()
    };
    // </create drink function>

    // <delete drink function>
    const deleteDrink = async (id) => {
        const drinkDoc = doc(db, "drinks", id);
        await deleteDoc(drinkDoc);
        window.location.reload()
    }
    // </delete drink function>

    // <get drinks function>
    useEffect(() => {
        const getDrinks = async () => {
            const data = await getDocs(drinksCollectionRef);
            setDrinks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // console.log('im data', data.docs.map((doc) => ({...doc.data()})))
        }
        getDrinks()
        // console.log('drinks', drinks)
    }, []);
    // </get drinks function>

    // console.log('modalData', modalData)

    return (
        <Layout>
            <>
                <section className='hero is-dark'>
                    <div className='hero-body'>
                        <p className='title'> Our Menu</p>
                    </div>

                    <div className={isModalOpen ? 'modal' : 'modal is-active'} >
                        <div className="modal-background"></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Create a new drink</p>
                            </header>
                            <section className="modal-card-body">
                                <input className='input is-rounded' placeholder="Drink Name..." onChange={(event) => { setNewDrink(event.target.value) }}></input>
                                <input type='number' className='input is-rounded' placeholder="Drink Size..." onChange={(event) => { setNewSize(event.target.value) }}></input>
                                <input type='number' className='input is-rounded' placeholder="Price $" onChange={(event) => { setNewPrice(event.target.value) }}></input>
                            </section>
                            <footer className="modal-card-foot">
                                <button className='button is-warning' onClick={createDrink}>Create Drink</button>
                                <button className="button is-danger" onClick={() => setModalToggle(!isModalOpen)}>Cancel</button>
                            </footer>
                        </div>
                    </div>
                    <button className='button is-info createButton' onClick={() => setModalToggle(!isModalOpen)}>Create New Drink</button>
                    <hr className="dropdown-divider"></hr>

                </section>

                {drinks.map((drink) => {
                    return (
                        <div className='section'>
                            <div className='tile is-ancestor' key={drink.id}>
                                <div className='tile is-parent'>
                                    <div className='tile is-child box cardColor'>
                                        <div className='cardTitles'>
                                            <p class="title is-3">{drink.name}</p>
                                            <p class="subtitle is-5">{drink.size}oz</p>
                                            <p className="subtitle is-4">${drink.price}</p>
                                        </div>
                                        <hr></hr>
                                        <div class="content">
                                            <button className='button is-black' onClick={() => deleteDrink(drink.id)}>Delete</button>
                                            <EditPage id={drink.id} name={drink.name} size={drink.size} price={drink.price}></EditPage>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </>
        </Layout >
    )
}



export const Head = () => <title>Our Menu</title>


export default Menu;
