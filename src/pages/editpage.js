import React, { useEffect, useState } from 'react';
import { db } from './index';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const EditPage = (props) => {
    console.log('editpageprops', props)
    // <update drink form state>
    const [newDrinkName, setNewDrinkName] = useState(props.name);
    const [newDrinkSize, setNewDrinkSize] = useState(props.size);
    const [newDrinkPrice, setNewDrinkPrice] = useState(props.price);
    const [isDropDownOpen, setDropDownOpen] = useState(false)

    // </update drink form state>

    console.log('name', newDrinkName)

    const updateDrink = async (id, name, size, price) => {
        // console.log(name, size, price)
        const drinkDoc = doc(db, "drinks", id)
        // console.log(name)
        const newFields = { name: name, size: Number(size), price: Number(price) }
        await updateDoc(drinkDoc, newFields)
        window.location.reload()
    }

    const changeDropdown = () => {
        setDropDownOpen(!isDropDownOpen)
    }

    return (
        <>
            <button className='button is-dark' onClick={changeDropdown}>Edit</button>
            <div className={isDropDownOpen ? 'dropdown is-active' : 'dropdown'}>
                <div class="dropdown-trigger">
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <div>
                            <input className='input dropdown-item' defaultValue={props.name} onChange={(event) => { setNewDrinkName(event.target.value) }}></input>
                            <input className='input dropdown-item' defaultValue={props.size} type='number' onChange={(event) => { setNewDrinkSize(event.target.value) }}></input>
                            <input className='input dropdown-item' defaultValue={props.price} type='number' onChange={(event) => { setNewDrinkPrice(event.target.value) }}></input>
                        </div>
                        <hr class="dropdown-divider"></hr>
                        <button className='button is-success' onClick={() => { updateDrink(props.id, newDrinkName, newDrinkSize, newDrinkPrice) }}>Save</button>
                        <button className='button is-danger' onClick={changeDropdown}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPage