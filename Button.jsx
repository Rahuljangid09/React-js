import React from 'react'

function printname(event){
    console.log('rahul')
    console.log(event)
}
function hover(){
  console.log('hover')
}
function double(){
  console.log('you double clicked')
}


export const Button = () => {
  return (
    <div>
        <button onClick={printname}>Clickme!</button>

        <p onMouseOver={hover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet id veniam aperiam perspiciatis, voluptatibus sequi tempora nihil libero ut aut facere beatae, cumque aliquam ex quas vel quae autem!</p>

        <button onDoubleClick={double}>Clickme!</button>

    </div>
  )
}
