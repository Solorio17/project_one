

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { db } from './index';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import './mystyles.scss'


const Menu = () => {
    const [isModalOpen, setModalToggle] = useState(true)
    const [isDropDownOpen, setDropDownOpen] = useState(false)

    // <create drink form state>
    const [newDrink, setNewDrink] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    // </create drink form state>

    const [drinks, setDrinks] = useState([]);
    const drinksCollectionRef = collection(db, "drinks");

    // <update drink form state>
    const [newDrinkName, setNewDrinkName] = useState('');
    const [newDrinkSize, setNewDrinkSize] = useState(0);
    const [newDrinkPrice, setNewDrinkPrice] = useState(0);
    // </update drink form state>


    // <create drink function>
    const createDrink = async () => {
        await addDoc(drinksCollectionRef, { name: newDrink, size: Number(newSize), price: Number(newPrice) })
    };
    // </create drink function>

    // <update drink function>
    const updateDrink = async (id, name, size, price) => {
        const drinkDoc = doc(db, "drinks", id)
        // console.log(name)
        const newFields = { name: name, size: Number(size), price: Number(price) }
        await updateDoc(drinkDoc, newFields)
        
        window.location.reload();
    }
    // </update drink function>

    // <delete drink function>
    const deleteDrink = async (id) => {
        const drinkDoc = doc(db, "drinks", id);
        deleteDoc(drinkDoc)
    }
    // </delete drink function>

    // <get drinks function>
    useEffect(() => {
        const getDrinks = async () => {
            const data = await getDocs(drinksCollectionRef);
            setDrinks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // console.log('im data', data)
        }
        getDrinks()
    }, []);
    // </get drinks function>


    return (
        <Layout>
            <section className='hero is-dark'>
                <div className='hero-body'>
                    <p className='title'> Our Menu</p>
                </div>
            
                <div className={isModalOpen ? 'modal' : 'modal is-active'} >
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Modal title</p>
                        </header>
                        <section className="modal-card-body">
                            <input className='input is-rounded' placeholder="Drink Name..." onChange={(event) => { setNewDrink(event.target.value) }}></input>
                            <input type='number' className='input is-rounded' placeholder="Drink Size..." onChange={(event) => { setNewSize(event.target.value) }}></input>
                            <input type='number' className='input is-rounded' placeholder="Price $" onChange={(event) => { setNewPrice(event.target.value) }}></input>
                        </section>
                        <footer className="modal-card-foot">
                            <button className='button is-warning' onClick={createDrink}>Create Drink</button>
                            <button className="button is-danger"  onClick={() => setModalToggle(!isModalOpen)}>Cancel</button>
                        </footer>
                    </div>
                </div>
                <button className='button is-primary' onClick={() => setModalToggle(!isModalOpen)}>Create New Drink</button>
                <hr className="dropdown-divider"></hr>


            {drinks.map((drink) => {
                return (
                    <section className='hero' key={drink.id}>
                        <table className='table' >
                            <thead>
                                <tr>
                                    <th>SERVING SIZE: {drink.size}oz</th>
                                    <th>CALS</th>
                                    <th>FAT</th>
                                    <th>SUGAR</th>
                                    <th>$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{drink.name}</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>{drink.price}</th>
                                </tr>
   
                            </tbody>
                        
                        </table>

                        <button className="button is-info" onClick={() => setDropDownOpen(!isDropDownOpen)} >Edit Drink </button>
                        <button className='button is-danger' onClick={() => deleteDrink(drink.id)}>Delete</button>
                        <input className='input' defaultValue={drink.name} onChange={(event) => { setNewDrinkName(event.target.value)}}></input>
                        <input className='input' type='number' defaultValue={drink.size} onChange={(event) => { setNewDrinkSize(event.target.value)}}></input>
                        <input className='input' type='number' defaultValue={drink.price} onChange={(event) => { setNewDrinkPrice(event.target.value)}}></input>
                        <button className='button is-link' onClick={() => {updateDrink(drink.id, newDrinkName, newDrinkSize, newDrinkPrice)}}>Save Changes</button>
                        <hr className="dropdown-divider"></hr>
                        <hr className="dropdown-divider"></hr>
                    </section>
                )
            })}
            </section>
        </Layout >
    )
}



export const Head = () => <title>Our Menu</title>


export default Menu;
