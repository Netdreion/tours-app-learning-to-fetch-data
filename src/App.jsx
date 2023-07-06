import { useEffect, useState } from "react";
import "./App.css";
const url = "https://jade-gnome-d8c89d.netlify.app/";

function App() {
  const [tours, setTours] = [];

  const url='https://tours-data.netlify.app/functions/myFunction'

const tourData=async()=>{
  try{
    constresponse=await fetch(url)
    const data=await response.json()

  }catch(error){
    console.log(error)
  }
  setTours(data)
}

useEffect(()=>{
  tourData()
},[])

 return(
  <div>
    
  </div>
 )

export default App;
