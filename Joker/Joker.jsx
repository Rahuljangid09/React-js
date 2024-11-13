import React, { useState } from 'react'

export const Joker = () => {

    const [joke, setJoke]=useState({})

    const URL ="https://official-joke-api.appspot.com/random_joke"
    
    const getJoke=async()=>{
       let response=await fetch(URL)
       let jsonResponse=await response.json()
       setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline})
    }

  return (
    <div>
        <h3>Joker!</h3>
        <h4>{joke.setup}</h4>
        <h4>{joke.punchline}</h4>
        <button onClick={getJoke}>Get a joke</button>
    </div>
  )
}

