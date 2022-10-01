import React, { useRef, useState } from 'react'
const UseRef = () => {
  const luckyName =useRef(null);
  const [show,setShow]=useState(false)
 
  const submitForm=(e)=>{
    e.preventDefault();
    const name=luckyName.current.value;
    name===""? alert("pls dill this") : setShow(true);
  }
    return (
    <div>
      <h2>Q1. What is UseRef Hook ?(Implementation)</h2>
      <form action="" onSubmit={submitForm}>

      <label htmlFor=''>Enter Name : </label>
      <input type="text" ref={luckyName}></input><br/><br/>
      <button>click it </button>
      <p>{show ? `Welcome ${luckyName.current.value}` : ""}</p>
      </form>
    </div>
  )
}
export default UseRef