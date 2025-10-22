import React from 'react'
import "../../styles/RegistrationForm.css"

function RegistrationForm() {
  return (
    <>
   <div className='form-Container'>
    <h2 className='head'>Registration Form</h2>
    <form action="">
     <label htmlFor="name">Full Name</label> <br />
     <input type="text" className='input-box' placeholder='Enter your name' /> <br />
     <div></div>
     <label htmlFor="age">Age</label> <br />
     <input type="number" className='input-box' placeholder='Enter your age'/> <br />
     <div></div>
     <label htmlFor="email">Email</label> <br />    
     <input type="email" className='input-box' placeholder='Enter your email' /> <br />
     <div></div>
     <label htmlFor="password">Password</label> <br />
     <input type="text" className='input-box' placeholder='Enter your password' /> <br />
     <div></div>
     <label htmlFor="gender">Gender</label> <br />
     <input type="radio" name="gender"  /> Male
     <input type="radio" name="gender"  /> Female <br />
     <label htmlFor="">Country</label> <br />
     <select  name="country" className='country'> 
        <option value="">Select</option>
        <option value="">Srilanka</option>
        <option value="">india</option>
        <option value="">USA</option>
        <option value="">UK</option>
        <option value="">canada</option>
        <option value="">Australis</option>
     </select> <br />
     <label htmlFor="skills">Skills</label> <br />
     <input type="checkbox" name="" />HTML
     <input type="checkbox" name="" />CSS
     <input type="checkbox" name="" />Javascript
     <input type="checkbox" name="" />React
     <input type="checkbox" name="" />Node.js <br />
     <label htmlFor="Bio">Bio</label> <br />
     <textarea name="textarea" className='input-box' id='text-area' placeholder='Tell somthing about yourself...' /> <br />
    <button type='submit'>Register</button>
    </form>
   </div>
    </>
  )
}

export default RegistrationForm