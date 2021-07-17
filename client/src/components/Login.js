import React,{useState} from 'react'
import {NavLink,useHistory} from "react-router-dom";

const Login = () => {
const history =useHistory();

const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

const loginuser=async(e)=>{
e.preventDefault();

const res =await fetch('/login',{
method:"POST",
headers:{
  "Content-Type":"application/json"
},
 body:JSON.stringify({
  email,
  password
})
});

const data = res.json();

if(res.status===400 || !data){
  window.alert("invalid login");
}else{
  window.alert("successfully login");
history.push('/');
}
}







    return (
        <>

<div class="login-container ">
      <form method="POST" class="login-form p-3">
    <h3 class="createheading">LOGIN</h3>
       
        
        <div class="login-group">
          <label for="exampleInputEmail1"><i class="fa fa fa-envelope-open fa-1x"></i>Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
          value ={email}
          onChange={(e)=>setEmail(e.target.value)}
           placeholder="Enter email"/>
        </div>



        <div class="login-group">
          <label for="password"> <i class="fa fas fa fa-lock fa-1x"></i>Password</label>
          <input type="password" class="form-control" id="password" name="password" 
            value ={password}
          onChange={(e)=>setPassword(e.target.value)} 
          placeholder="Enter your password"/>
        </div>

      < button  type="submit" class=" login-btn btn btn-warning" name="submit" onClick={loginuser}>LOGIN</button>
      <NavLink to="/signup" className="already-registered">Create your account </NavLink>
  </form>
  </div>



        </>
    )
}

export default Login
