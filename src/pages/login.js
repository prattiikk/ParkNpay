import { Link } from 'react-router-dom';
import axios from 'axios';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
const Login = () => {
  async function login() {
    try {
      let info = await axios.post('/user/login', {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      })
      localStorage.setItem("user", info.data.user);
      console.log(localStorage.getItem("user"))
    } catch (err) {
      alert("Wrong username or password !!!")
    }
  }
  return (
    <>
    <div className='login-form-wrapper'>
      <h3 className='login-form__heading'>Login</h3>
      <form className="login-form" >
        <label className='login-form__label'>
          Username
          <input className='login-form__input' id='username' type="text" />
        </label>
        <label className="login-form__label">
          Password
          <input className='login-form__input' id='password' type="text" />
        </label>
        <button className='login-form__button' onClick={login} type="submit">Submit</button>
        <hr className='login-form__hr'></hr>
        <p className='login-form__or'>or</p>
        <h3 className='login-form__footing'>Not a user? <span> <Link id='sign-up-now' to='/signup'>sign-up</Link> </span></h3>
      </form>
    </div>
    <hr></hr>
    </>
  );
};

export default Login;
