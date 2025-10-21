import React, { useState } from "react"

function UseState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(27);

  function increase() {
     setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function countIncrease() {
    setAge(age + 1)
  }


  return (
    <div> 
      <h1>UseState</h1>
      <button onClick={increase}>+</button> <br />
      <button>{count}</button>
      <br />
      <button onClick={decrease}>-</button>
      <br /> <br />
      <hr />
      <button onClick={countIncrease} >Age : {age}</button> <br />
      <input type="text" value={age} />
    </div>
  )
}





export default UseState