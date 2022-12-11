

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { db } from './index';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import './mystyles.scss'
import EditPage from './editpage';


const Menu = () => {
    const [isModalOpen, setModalToggle] = useState(true)
    const [isDropDownOpen, setDropDownOpen] = useState(false)

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
        await addDoc(drinksCollectionRef, { name: newDrink, size: Number(newSize), price: Number(newPrice) })
    };
    // </create drink function>

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
            // console.log('im data', data.docs.map((doc) => ({...doc.data()})))
        }
        getDrinks()
        console.log('drinks', drinks)
    }, []);
    // </get drinks function>

    console.log('modalData', modalData)
 
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
                        <button className='button is-danger' onClick={() => deleteDrink(drink.id)}>Delete</button>
                        <button className='button is-warning' onClick={() => {setModalData(drink); setDropDownOpen(!isDropDownOpen)}}>View</button>
                        <EditPage id={drink.id} name={drink.name} size={drink.size} price={drink.price}></EditPage>
                    </section>
                )
            })}
               <div className={isDropDownOpen ? 'modal is-active' : 'modal'}>
                            <div className="modal-background"></div>
                                <div className="modal-content">
                                    <h1>Name: {modalData.name}</h1>
                                    <h1>Size: {modalData.size}</h1>
                                    <h1>Price: {modalData.price}</h1>
                                </div>
                            <button className="modal-close is-large" aria-label="close" onClick={() => setDropDownOpen(!isDropDownOpen)}></button>
                        </div>
            </section>
        </Layout >
    )
}



export const Head = () => <title>Our Menu</title>


export default Menu;
