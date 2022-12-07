

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { db } from './index';
import { collection, getDocs } from 'firebase/firestore';
import './mystyles.scss'


const Menu = () => {

    const [drinks, setDrinks] = useState([]);
    const drinksCollectionRef = collection(db, "drinks")

    useEffect(() => {
        const getDrinks = async () => {
            const data = await getDocs(drinksCollectionRef);
            setDrinks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log('im data', data)
        }

        getDrinks()
    }, []);
    return (
        <Layout>

            {drinks.map((drink) => {
                return (
                    <>
                        <h1>Name: {drink.name}</h1>
                        <h1 >Size: {drink.size}</h1>
                        <h1 >Price: {drink.price}</h1>
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