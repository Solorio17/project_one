

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { db } from './index';
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';
import './mystyles.scss'


const Menu = () => {
    const [isModalOpen, setModalToggle] = useState(true)

    const [newDrink, setNewDrink] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newPrice, setNewPrice] = useState(0);

    const [drinks, setDrinks] = useState([]);
    const drinksCollectionRef = collection(db, "drinks")


    // console.log(isModalOpen);

    const createDrink = async () => {
        await addDoc(drinksCollectionRef, { name: newDrink, size: Number(newSize), price: Number(newPrice) })
    };



    const updateDrink = async (id, name, size, price) => {
        const drinkDoc = doc(db, "drinks", id)
        // console.log(name)
        const newFields = { name: name, size: Number(size), price: Number(price) }
        await updateDoc(drinkDoc, newFields)
    }


    useEffect(() => {
        const getDrinks = async () => {
            const data = await getDocs(drinksCollectionRef);
            setDrinks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // console.log('im data', data)
        }
        getDrinks()
    }, []);

    return (
        <Layout>
            <input placeholder="Drink Name..." onChange={(event) => { setNewDrink(event.target.value) }}>

            </input>
            <input placeholder="Drink Size..." onChange={(event) => { setNewSize(event.target.value) }}></input>
            <input placeholder="Price" onChange={(event) => { setNewPrice(event.target.value) }}></input>

            <button onClick={createDrink}>Create Drink</button>
            {drinks.map((drink) => {
                console.log(drink.id);
                return (
                    <div key={drink.id}>
                        <h1>Name: {drink.name}</h1>
                        <h1 >Size: {drink.size}oz</h1>
                        <h1 >Price: ${drink.price}.99</h1>
                        <h1>ID: {drink.id}</h1>
                        {/* <button onClick={() => updateDrink(drink.id, drink.price)}>Increase Price</button> */}

                        <button onClick={() => setModalToggle(!isModalOpen)}>Modal</button>
                        <input placeholder={drink.name} onChange={(event) => { updateDrink(drink.id, event.target.value, drink.size, drink.price) }}></input>
                        <input placeholder={drink.size} onChange={(event) => { updateDrink(drink.id, drink.name, event.target.value, drink.price) }}></input>
                        <input placeholder={drink.price} onChange={(event) => { updateDrink(drink.id, drink.name, drink.size, event.target.value) }}></input>
                        {/* <button onClick={console.log(drink.id, drink.name)}>Info</button> */}
                        {/* <div className={isModalOpen ? 'modal' : 'modal is-active'} >
                            <div className="modal-background"></div>
                            <div className="modal-card">
                                <header className="modal-card-head">
                                    <p className="modal-card-title">Modal title</p>
                                    <button onClick={() => setModalToggle(!isModalOpen)} className="modal-close is-large" aria-label="close"></button>

                                </header>
                                <section className="modal-card-body">
                                    <input placeholder={drink.name}></input>
                                    <input placeholder={drink.size}></input>
                                    <input placeholder={drink.price}></input>
                                </section>
                                <footer className="modal-card-foot">
                                    <button className="button is-success">Save changes</button>
                                    <button className="button">Cancel</button>
                                </footer>
                            </div>
                        </div> */}
                        <hr />
                    </div>
                )
            })}

            <section className='hero is-dark'>
                <div className='hero-body'>
                    <p className='title'> Our Menu</p>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SERVING SIZE 12OZ</th>
                            <th>CALS</th>
                            <th>FAT</th>
                            <th>SUGAR</th>
                            <th>$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Caramel Machiatto</th>
                            <td>280</td>
                            <td>23</td>
                            <td>22g</td>
                            <td>4.80</td>
                        </tr>
                        <tr>
                            <th>Iced Matcha Latte</th>
                            <td>120</td>
                            <td>12</td>
                            <td>12g</td>
                            <td>5.20</td>
                        </tr>
                        <tr>
                            <th>Strawbearry Frappe</th>
                            <td>400</td>
                            <td>20</td>
                            <td>34g</td>
                            <td>5.80</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </Layout >
    )
}



export const Head = () => <title>Our Menu</title>


export default Menu;