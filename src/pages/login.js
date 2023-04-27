
import axios from 'axios';
import './login.css';
const Login = () => {
    async function login(){
        try{
          let info=await axios.post('/user/login',{
            username:document.getElementById("username").value,
            password:document.getElementById("password").value
           })
           localStorage.setItem("user",info.data.user);
           console.log(localStorage.getItem("user"))
        }catch(err){
          alert("wrong username or password")
        }
 }
  return (
    <form className="login-form" >
      <label>
        Username:
        <input id='username' type="text"/>
      </label>
      <label>
        Password:
        <input id='password' type="text" />
      </label>
      <button onClick={login} type="submit">Submit</button>
    </form>
  );
};

export default Login;
