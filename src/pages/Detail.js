import React, { useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { getCrew } from '../App'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Detail = () => {

  let id = useParams("id")
  id = id.id
  const [data, setData] = useState()

  useEffect(()=>{
    async function getData(){
      const data = await getCrew(id)
      if(data){
        setData(data)
      }
    }
    getData()

  }, [])


  if(data){
    console.log(data)
  }
  return (
    <div className='main'>
      { data ? 
      <>
      <h1>
        Crewmate: {data[0].name}
      </h1>
      <h1>Stats:</h1>
      <p>Color: {data[0].color}</p>
      <p>Speed: {data[0].speed} mph</p>
       {
        data[0].speed < 5 ? 
        <p>You may want to find a Crewmate with more speed, this one is kind of slow 😬        
        </p>
        :
        null
       } 
      {data && <Link crewid={data[0].crewid} to={'/edit/'+data[0].id}className='one--crew--button'>Wanna edit this Crewmate?</Link>}
      <img className='one--crew--pic' src='https://preview.redd.it/suw3y95f0kx51.png?auto=webp&s=191f9e31aefcbf182fe3128743c058d54112d84f'></img>
       </> : <h1>loading....</h1>
      }
    </div>
  )
}
