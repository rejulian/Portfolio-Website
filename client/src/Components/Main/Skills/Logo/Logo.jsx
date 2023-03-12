import React from 'react'

const Logo = ({img,name}) => {
  return (
    <div className='logo'>
        <img src={img} alt="Logo"/>
        <p>{name}</p>
    </div>
  )
}

export default Logo