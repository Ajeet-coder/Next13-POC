"use client"
import React, { useEffect } from 'react'

const error = ({error,reset}:any) => {

    useEffect(()=>{
        console.log("error occured!!",error);
    },[error])

  return (
    <div >
        <h6>Something went wrong!!</h6>
        <button>Try again ?</button>
      
    </div>
  )
}

export default error
