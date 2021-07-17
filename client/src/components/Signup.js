import React,{useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";



const Signup = () => {
const history = useHistory();
const [user,setUser]=useState({
  name:"",email:"", work:"", phone:"",password:"",cpassword:""
})

let name,value;
const handleInputs=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
}

const Postdata = async (e)=>{
 e.preventDefault();

 const{name,email, work, phone,password,cpassword}=user;

const res= await fetch("/signup",{

method:"POST",
headers:{
  "Content-Type":"application/json"
},

body:JSON.stringify({
 name,email, work, phone,password,cpassword

})

});

const data=await res.json();

if(data.status === 422 || !data){
  window.alert("invalid registration");
  console.log("invalid registration")
}
else{
   window.alert("succesfully registration");
  console.log("successfully registration");
  history.push("/login");
}


}


    return (
        <>

      <div class="signup-container ">
      <form method="POST" class="signup-form p-3">
    <h3 class="createheading">CREATE YOUR ACCOUNT</h3>
        <div class="form-group">
          <label for="name"><i class="fa fas fa-user-tie fa-1x"></i>	Name</label>
          <input type="text" class="form-control" id="name" name="name" 
          value={user.name}
          onChange={handleInputs}
          placeholder="Enter your name"/>
        </div>
        
        <div class="form-group">
          <label for="exampleInputEmail1"><i class="fa fa fa-envelope-open fa-1x"></i>Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" 
          value={user.email}
          onChange={handleInputs}
          placeholder="Enter email"/>
          <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
        </div>


         <div class="form-group">
          <label for="work"><i class="fa fas fa-user-tie fa-1x"></i>	WORK</label>
          <input type="text" class="form-control" id="work" name="work" 
          value={user.work}
          onChange={handleInputs}
          placeholder="Enter your profession"/>
        </div>


        <div class="form-group">
          <label for="phone"><i class="fa fas fa-phone-volume fa-1x"></i>Phone</label>
          <input type="text" class="form-control" id="phone" name="phone" 
          value={user.phone}
          onChange={handleInputs}
          placeholder="Enter phone number"/>
      </div>

        <div class="form-group">
          <label for="password"> <i class="fa fas fa fa-lock fa-1x"></i>Password</label>
          <input type="password" class="form-control" id="password" name="password" 
          value={user.password}
          onChange={handleInputs}
          placeholder="Enter password"/>
          <small class="form-text">password must be of 8 charcters</small>
        </div>

        <div class="form-group">
          <label for="cpassword"><i class="fa fas fa fa-lock fa-1x"></i>Confirm Password</label>
          <input type="password" class="form-control" id="cpassword" name="cpassword" 
          value={user.cpassword}
          onChange={handleInputs}
          placeholder="confirm password"/>
        </div>

      <button type="submit" class="btn btn-warning" name="submit" onClick={Postdata} >Submit</button>
      <NavLink to="/login" className="already-registered">I am already registered </NavLink>
  </form>
  </div>
            
        </>
    )
}

export default Signup
