import React from 'react'
import { useState } from 'react'

export const Lottery = () => {
  
  const [tickets, settickets] = useState(null)
  const [message, setmessage] = useState("")

  const generateTicket=()=>{

    const newTicket=Math.floor(Math.random()*900)+100
  
    const hundreds=Math.floor(newTicket/100)
    const tens=Math.floor((newTicket%100)/10)
    const units=newTicket%10

    const sumofdigits=hundreds+tens+units

    settickets(newTicket)
    if(sumofdigits===15){
      setmessage("Congrats! You won the Lottery")
    }else{
      setmessage("Try again. Better luck next time")
    }
  }

  


  return (
    
    <div>
        <h2>Lottery Ticket</h2>
        <button onClick={generateTicket}>Generate lottery ticket</button>
        {tickets !== null&&(
          <div>
          <h3>Your Ticket:{tickets}</h3>
          <h3>{message}</h3>
          </div>
        )
        }
    </div>
  )
}
