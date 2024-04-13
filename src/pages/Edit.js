import React, { useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { getCrew } from '../App'
import {useParams} from 'react-router-dom'

export const Edit = () => {

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



  return (
    <div className='main'>  
      <h1>Update Your Crewmate 🤗</h1> 
      <img className='home--crewmates home--crewmates--2' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d49ba913-dbd1-4505-99cc-9bd433c6e42d/densa1s-8bf52dc4-1f15-419f-a0e9-c9471a839e9c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q0OWJhOTEzLWRiZDEtNDUwNS05OWNjLTliZDQzM2M2ZTQyZFwvZGVuc2Excy04YmY1MmRjNC0xZjE1LTQxOWYtYTBlOS1jOTQ3MWE4MzllOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fk9AuX3oBNLWiW6IlPBNjvS8c8BpO5lYlKwOOFWsGQs'></img>
      <h3>Current Crewmate Info:</h3>
      {data ? 
      <p>Name: {data[0].name}, Speed: {data[0].speed}, Color: {data[0].color}</p>
      :
      null
      }
      <Form type="edit" crewid={id} data={data} />
    </div>
  )
}
