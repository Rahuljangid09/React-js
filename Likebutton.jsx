import React from 'react'
import { useState } from 'react'

export const Likebutton = () => {
    let [isLiked, setIsLiked] = useState(false)
    let toggle=()=>{
      setIsLiked(!isLiked)
    }
  return (
    <div>
        <p onClick={toggle}>
        {
          isLiked?( <i class="fa-solid fa-heart"></i>):(
            <i class="fa-regular fa-heart"></i>
          )
        }
        </p>   
    </div>
  )
}
