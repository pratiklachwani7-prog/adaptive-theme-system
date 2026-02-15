import React, { useCallback } from 'react'
import {complement} from "./colorUtils.js"


const Colors = (props) => {


  const setBackground = props.fnc ;



  return (
    <div className='colorPallet h-16 w-full bg-gray-400 mt-10 rounded-3xl flex justify-around items-center cursor-pointer'>
        {props.colors.map( (elem , idx)=>
        {
          return <h1
          key = {idx} 
          style={{backgroundColor:elem , color:complement(elem)}}
          onClick={ () =>
          {
            setBackground(elem) ;
          }
           }
          className='h-fit w-fit px-4 py-2 rounded-4xl'
          >{elem} </h1>
        } )}
    </div>
  )
}

export default Colors
