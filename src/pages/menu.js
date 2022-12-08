

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { db } from './index';
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';
import './mystyles.scss'


const Menu = () => {
    const [newDrink, setNewDrink] = useState("");
    const [newSize, setNewSize] = useState("");

    const [drinks, setDrinks] = useState([]);
    const drinksCollectionRef = collection(db, "drinks")

    const createDrink = async () => {
        await addDoc(drinksCollectionRef, { name: newDrink, size: newSize })
    };

    const updateDrink = async (id, price) => {
        const drinkDoc = doc(db, "drinks", id)
        const newFields = { price: price + 1 }
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

    console.log('hello', process.env.GATSBY_APIKEY);
    return (
        <Layout>
            <input placeholder="Drink Name..." onChange={(event) => { setNewDrink(event.target.value) }}></input>
            <input placeholder="Drink Size..." onChange={(event) => { setNewSize(event.target.value) }}></input>
            <button onClick={createDrink}>Create Drink</button>
            {drinks.map((drink) => {
                return (
                    <>
                        <h1>Name: {drink.name}</h1>
                        <h1 >Size: {drink.size}</h1>
                        <h1 >Price: {drink.price}</h1>
                        <button onClick={() => updateDrink(drink.id, drink.price)}>Increase Price</button>
                        <hr />
                    </>
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
        </Layout>
    )
}



export const Head = () => <title>Our Menu</title>


export default Menu;