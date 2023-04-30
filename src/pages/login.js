import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  async function login() {
    try {
      let info = await axios.post('/user/login', {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      })
      localStorage.setItem("user_id", info.data.user_id);
      console.log(localStorage.getItem("user_id"))
    } catch (err) {
      alert("Wrong username or password !!!")
    }
  }
  return (
    <>
    <div className='login-form-wrapper'>
      <h3 className='login-form__heading'>Login</h3>
      <div className="login-form" >
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
      </div>
    </div>
    <hr></hr>
    </>
  );
};

export default Login;
