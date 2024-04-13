import React, { useState } from 'react'
import {addCrew, deleteCrew, updateCrew} from '../App.js'

export const Form = (props) => {

    console.log(props.data)


    const [name, setName] = useState()
    const [color, setColor] = useState()
    const [speed, setSpeed] = useState()

    function handleChange(e){   
        setColor(e.target.value)
    }

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleSpeedChange(e){
        const parsedSpeed = parseFloat(e.target.value)
        if (!isNaN(parsedSpeed)) {
            setSpeed(parsedSpeed);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        if (props.type === 'create'){
            addCrew({"name": name, "color": color, "speed": speed})
        }
    }

    async function deleteCurrentCrew(id){
        console.log('delete function was called')
        const deleted = await deleteCrew(id)
        if(deleted){
            console.log(deleteCrew)
        }
    }


    async function updateCurrentCrew(){
        let n = name ? name: props.data[0].name
        let s = speed ? speed : props.data[0].speed
        let c = color ? color  : props.data[0].color
        const data = {name: n, speed: s, color: c}
        const updated = await updateCrew(props.crewid, data);
        if(updated){
            console.log("successfully updated")
        }
        else{
            console.log('something went wrong')
        }


    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form--text--container'>
        <label htmlFor='name'>Name:</label>
        <input id='name' onChange={handleNameChange} className='form--input--text'></input>
        </div>
        <div className='form--text--container'>
        <label htmlFor='speed'>Speed (mph):</label>
        <input id='speed' onChange={handleSpeedChange} className='form--input--text'></input>   
        </div>     
        <div className='form--colors'>
            <label className='input--color--title'>Colors</label>
            <label>Red<input type='radio' value='Red' checked={color === 'Red'} onChange={handleChange}></input></label>
            <label>Green<input type='radio' value='Green' checked={color === 'Green'} onChange={handleChange}></input></label>
            <label>Blue<input type='radio' value='Blue' checked={color === 'Blue'} onChange={handleChange}></input></label>
            <label>Purple<input type='radio' value='Purple' checked={color === 'Purple'} onChange={handleChange}></input></label>
            <label>Yellow<input type='radio' value='Yellow' checked={color === 'Yellow'} onChange={handleChange}></input></label>
            <label>Orange<input type='radio' value='Orange' checked={color === 'Orange'} onChange={handleChange}></input></label>
            <label>Pink<input type='radio' value='Pink' checked={color === 'Pink'} onChange={handleChange}></input></label>
            <label>Rainbow<input type='radio' value='Rainbow' checked={color === 'Rainbow'} onChange={handleChange}></input></label>
        </div>
        {props.type === 'create' ? <button className='form--submit'>Create Crewmate</button> : 
            <div>
            <button onClick={updateCurrentCrew} className='form--submit form--submit2'>Update Crewmate</button>
            <button onClick={() => deleteCurrentCrew(props.crewid)} className='form--submit'>Delete Crewmate</button>
            </div>}
    </form>
  )
}
