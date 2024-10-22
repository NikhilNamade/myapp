import React from 'react'

const Child = (props) => {
    const {name,age} = props
  return (
    <>
    <h1>Hiii</h1>
    <h1>{name?name:""}</h1>
    <h1>{age?age:""}</h1>
    </>
  )
}

export default Child