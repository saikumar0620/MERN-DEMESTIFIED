import React from 'react'

const Homepage = () => {
  React.useEffect(()=>{

    return()=>{console.log("unmounted")}
  },[])
  return (
    <h1>Homepaeeeege</h1>
  )
}

export default Homepage