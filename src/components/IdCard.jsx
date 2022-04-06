import React from 'react'

const IdCard = (props) => {
  return (
    <div className='IdCard'>
        <h3>{props.lastName}</h3>  
        <h3>{props.firstName}</h3>  
        <h3>{props.gender}</h3>  
        <h3>{props.height}</h3>  
        {/* <h3>{props.Date()}</h3>   */}
        <img src ={props.picture} alt="tg"/>       
    </div>
  )
}

export default IdCard