import React from 'react'

function ConditionalRendering({isActive = true,status}) {
  return (
    <div className='content-container'>
      <h1>ConditionalRendering</h1>
      {isActive &&  <p style={style.active}>Active</p> }
      {status == "paid" && <p>He is Paid</p>}
       
      </div>
    
  )
}

const style = {
  active:{
    backgroundColor:"green",
    display:"inline",
    borderRadius:"10px",
    padding:"5px 10px"
  }
}

export default ConditionalRendering