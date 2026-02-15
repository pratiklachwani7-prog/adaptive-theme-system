import React, { useCallback, useEffect, useState } from 'react'
import Colors from './Colors'

const App = () => {

    const decideBgColor = () =>
    {
        let theme = localStorage.getItem("theme") ;
        if (theme)
        {
            return theme ; 
        }
        else
        {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches)
            {
                return "black"
            }
            else
            {
                return "white" 
            }
        }
    }
  const colors = [ "Blue" , "green" , "yellow" , "pink" , "purple" , "orange" , "red" , "brown" ]
  const [bgColor, setBgcolor] = useState( () =>
                                        {
                                            return decideBgColor() ;
                                        })  ;




  useEffect( () => 
{
    if (bgColor !== "white" && bgColor !== "black") localStorage.setItem("theme" , bgColor) ;
} , [bgColor] ) ;

useEffect( () => 
{
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    

    const handleChange = (e) =>
    {
        if (e.matches) setBgcolor("black") ;
        else setBgcolor("white") ;
    }

    media.addEventListener("change" , handleChange) ;
} , [] )

  return (
      <div 
      style={{backgroundColor:bgColor}}
      className='main h-full w-full align-bottom px-10 flex flex-col justify-end'>

          <Colors colors = {colors} fnc={setBgcolor}/>

      </div>
  )
}

export default App
