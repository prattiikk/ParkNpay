import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function signup() {
  async function signup(){
        let details={
        name:document.getElementById("name").value,
        username:document.getElementById("signup-username").value, 
        password:document.getElementById("signup-password").value,
        email:document.getElementById("email").value,
    }
    try{
        let info=await axios.post('/user/new',{
          name:details.name,
          username:details.username,
          password:details.password,
          email:details.email
         })
         if(info.data.message=="user exists"){
          alert("Try again username exists")
         }else{
          console.log(details.username)
         }
      }catch(err){
        alert("Something went wrong try again");
      }
}
  return (
    <>
    <div className='login-form-wrapper'>
      <h3 className='login-form__heading'>SignUp</h3>
      <form className="login-form" >
        <label className='login-form__label'>
          Username
          <input className='login-form__input' id='signup-username' type="text" />
        </label>
        <label className="login-form__label">
          Password
          <input className='login-form__input' id='signup-password' type="password" />
        </label>
        <label className="login-form__label">
          Name
          <input className='login-form__input' id='name' type="text" />
        </label>
        <label className="login-form__label">
          Email
          <input className='login-form__input' id='email' type="email" />
        </label>
        <button className='login-form__button' onClick={signup} type="submit">Submit</button>

      </form>
    </div>
    <hr></hr>
    </>
  )
}
