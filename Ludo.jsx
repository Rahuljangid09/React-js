import React from 'react'
import { useState } from 'react'

export const Ludo = () => {
   const [moves, setMoves] = useState({blue:0,yellow:0,red:0,green:0})
   let bluemove=()=>{
    setMoves({...moves, blue: moves.blue+1})
   }
   let yellowmove=()=>{
    setMoves({...moves, yellow: moves.yellow+1})
   }
   let redmove=()=>{
    setMoves({...moves, red: moves.red+1})
   }
   let greenmove=()=>{
    setMoves({...moves, green: moves.green+1})
   }

  return (
    <div>
        <p>blue moves = {moves.blue}</p>
        <button onClick={bluemove} style={{backgroundColor:'blue'}}>+1</button>

        <p>yellow moves = {moves.yellow}</p>
        <button onClick={yellowmove} style={{backgroundColor:'yellow'}}>+1</button>

        <p>red moves = {moves.red}</p>
        <button onClick={redmove} style={{backgroundColor:'red'}}>+1</button>

        <p>green moves = {moves.green}</p>
        <button onClick={greenmove} style={{backgroundColor:'green'}}>+1</button>
    </div>
  )
}
