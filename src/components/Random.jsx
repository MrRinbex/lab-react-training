import React from 'react'



const Random = ({min,max}) => {
  return (
    <div>
          <p>The random value  {min} and {max} is { Math.floor(Math.random() *(max - min + 1) + min )}</p>
    </div>
  )
}

export default Random