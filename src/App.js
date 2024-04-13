import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';

const supabaseUrl = 'https://blfnskobfcuulmzmqato.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZm5za29iZmN1dWxtem1xYXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2MTYzNzMsImV4cCI6MjAyODE5MjM3M30.8hL1H3XSMHP5JoWx8w8HyQTIybxdG1k0tNpGzgc47S0'
const supabase = createClient(supabaseUrl, supabaseKey)

async function addCrew(data){
  const {error } = await supabase
  .from('Crews')
  .insert(data)
  if(error){
    console.log('error', error)
    return
  }
  console.log("added successfully")
}

async function getCrews(){
  const {data, error} = await supabase
  .from("Crews")
  .select()
  if(error){
    console.log('error', error)
    return
  }
  return data
}

async function getCrew(id){
  const {data, error} = await supabase
  .from('Crews')
  .select()
  .eq('id', id)
  if(error){
    console.log("error: "+error)
    return
  }
  return data
}

async function deleteCrew(id){
  const {error} = await supabase
  .from('Crews')
  .delete()
  .eq('id', id)
}

async function updateCrew(id, data){
  const {error} = await supabase
  .from('Crews')
  .update(data)
  .eq('id', id)
}

function App() {


  return (
      <div>
      </div>

  );
}

export {App, addCrew, getCrews, getCrew, deleteCrew, updateCrew};
