import React, { useEffect, useState } from "react";

function UseEffect() {
 const [age, setAge] = useState(27);
 const [size, setSize] = useState(20);


 useEffect(() => {
  console.info("word is logging");
 },[age]) 

  function increase() {
    setAge(age + 1);
  }

   function increase() {
    setSize(size + 2);
  }
  
  return (
    <>
    <div>
      <h2>Age: {age}</h2>
      <button onClick={increase}>
        Increase by 1
      </button>
      <br />
      <input type="text" name="" id="" value={age}/>

  
      <h2>Size: {size}</h2>
      <button onClick={increase}>
        Increase by 2
      </button>
      <br />
      <input type="text" name="" id="" value={size}/>
    </div>
    </>
  );
}



export default UseEffect;