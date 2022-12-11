import React, {useEffect, useState} from 'react';
import { db } from './index';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const EditPage = (props) => {
    console.log('editpageprops', props)
        // <update drink form state>
        const [newDrinkName, setNewDrinkName] = useState(props.name);
        const [newDrinkSize, setNewDrinkSize] = useState(props.size);
        const [newDrinkPrice, setNewDrinkPrice] = useState(props.price);
        // </update drink form state>

    console.log('name', newDrinkName)

    const updateDrink = async (id, name, size, price) => {
        // console.log(name, size, price)
        const drinkDoc = doc(db, "drinks", id)
        // console.log(name)
        const newFields = { name: name, size: Number(size), price: Number(price) }
        await updateDoc(drinkDoc, newFields)

    }

    return(
        <>
            <input className='input' defaultValue={props.name} onChange={(event) => {setNewDrinkName(event.target.value)}}></input>
            <input className='input' defaultValue={props.size} type='number' onChange={(event) => {setNewDrinkSize(event.target.value)}}></input>
            <input className='input' defaultValue={props.price} type='number' onChange={(event) => {setNewDrinkPrice(event.target.value)}}></input>
            <button className='button is-link' onClick={() => {updateDrink(props.id, newDrinkName, newDrinkSize, newDrinkPrice)}}>Save Changes</button>
        </>
    )
}

export default EditPage