import React, { useEffect, useState } from 'react'
import { getCrews } from '../App'
import {Crew} from '../components/Crew.js'
import { Link } from 'react-router-dom';



export const Gallery = () => {

  const [crews, setCrews] = useState([]);
  const [averageSpeed, setAverageSpeed] = useState(0);
  const [sucessRate, setSuccessRate] = useState(0);
  
  
  
  useEffect(()=>{
    async function getData(){
      const data = await getCrews()
      if(data){
        setCrews(data)
      }
      else{
        console.log('could not get data')
      }
    }
    getData()

  }, [])

  useEffect(()=>{
    function getAverageSpeed(){
      let c = 0
      let total = 0
      if(crews){
        for(let crew in crews){
          total += (crews[c].speed)
          c += 1
        }
        setAverageSpeed(total / c);
      }
    }
    getAverageSpeed();
  }, [crews.length])

  useEffect(()=>{
    async function getSuccessMetric(){
      let result = 0;
      if(crews){
        result = crews.length * 25
        if (result > 100){
          result = 100;
        }
        //console.log("averageSpeed: " + averageSpeed)
        if(averageSpeed){
          result = (averageSpeed * 0.1) * result;
        }
        else{
          let total = 0;
          let c = 0;
          for(let crew in crews){
            total += (crews[c].speed)
            c += 1
          }
          let average = total / c;
          result = average * 0.1 * result

        }

      }
      result += 3 * crews.length;
      if (result > 100){
        result = 100;
      }
      setSuccessRate(Math.round(result));
    }
    getSuccessMetric();
    
  }, [crews.length])


  return (
    <>
    <div className='crew--container main'>
    <h1 className='gallery-header'>Your Crewmate Gallery!</h1>
    <div className='gallery-header'>
    {<p>Success rate: {sucessRate}%</p>}
    {averageSpeed < 6 && averageSpeed != 0 ? <p>Suggestion: Get faster crews</p>: null}
    {crews.length < 4 && crews.length > 0 ? <p>Suggestion: Add more crews</p>: null}
    </div>

      { crews.length > 0 ? 

        
      crews.map(crew=>
          <div key={crew.id}>
          <Crew name={crew.name} color={crew.color} speed={crew.speed} crewid={crew.id}/>
          </div>
      )
      
      :

      <div className='main main--under'>
        <p>You haven't made a crewmate yet!</p>
        <Link to='/createcrewmate'className='one--crew--button'>Create one here!</Link>
      </div>

      }

    </div>
    </>
  )
}
