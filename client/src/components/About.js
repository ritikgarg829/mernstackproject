import React ,{useEffect} from 'react'
import ritik from "../images/ritik.jpg";
import {useHistory} from "react-router-dom";
const About = () => {

const history=useHistory();
useEffect(() => {
    const callAboutPage=async ()=>{
  try{
      const res = await fetch('/about',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"

      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200){
          const error = new Error (res.error);
          throw error;
      }

  }catch(err){

console.log(err);
history.push('/login');

  }
    }


   callAboutPage();
    
}, []);



    return (
        <>
<div className="container about-container">
<form className="about-form mt-4" method="GET">
<div className="row">
<div className="col-md-4">
<div className="profile-image">
<img src={ritik} style={{width:'200px', height:'200px'}} alt="ritik"/>
</div>
</div>
<div className="col-md-4">
<div className="profile-head">
<div className="row mb-3 ">
<h5>Ritik Garg</h5>
</div>
<div className="row mb-3 ">
<h6>web developer</h6>
</div>
<div className="row mb-3 ">
<p className="profile-rating mt-3 mb-5">Ranking : 1/10</p>
</div>
</div>
</div>
<div className="col-md-2">
<div className="row md-5">
<input type="submit" className="profile-edit-btn  " name="btn-add-more" value="edit profile"/>
</div>
</div>

<div className="row ">
<div className="col-md-3">
<div className="profile-work">
<h4>WORKLINK</h4>
<a href="https://www.instagram.com/" target="ritik">Instagram</a><br/>
<a href="https://www.instagram.com/" target="ritik">Instagram</a><br/>
<a href="https://www.instagram.com/" target="ritik">Instagram</a><br/>
<a href="https://www.instagram.com/" target="ritik">Instagram</a><br/>
<a href="https://www.instagram.com/" target="ritik">Instagram</a><br/>
</div>
</div>
<div className="col-md-5 pl-6 about-info">
<div className="row">
<h4 className="myabout mb-4">About</h4>
</div>
<div className="row">
<div className="col-md-3">
<label>User ID</label>
</div>
<div className="col-md-3 ml-5">
<p>4328947892374</p>
</div>
</div>
<div className="row mt-3">
<div className="col-md-3">
<label>Name</label>
</div>
<div className="col-md-3 ml-5">
<p>Ritik Garg</p>
</div>
</div>

<div className="row mt-3">
<div className="col-md-3">
<label>Email</label>
</div>
<div className="col-md-3 ml-5">
<p>mywebsite@gmail.com</p>
</div>
</div>

<div className="row mt-3">
<div className="col-md-3">
<label>Phone</label>
</div>
<div className="col-md-3 ml-5">
<p>+9174745757575</p>
</div>
</div>

<div className="row mt-3">
<div className="col-md-3">
<label>Profession</label>
</div>
<div className="col-md-3 ml-5">
<p>Web developer</p>
</div>
 </div>
</div>

<div className="col-md-4 pl-6 about-info">
<div className="row">
<h4 className="myabout mb-4">Timeline</h4>
</div>
<div className="row">
 <div className="col-md-4 ">
 <label>Experience</label>
 </div>
  <div className="col-md-4 ml-5 ">
 <label>Expert</label>
 </div>
 </div>
 <div className="row mt-4">
 <div className="col-md-4">
 <label>HourlyRate</label>
 </div>
  <div className="col-md-4 ml-5">
 <label>10$/hr</label>
 </div>
 </div>

 <div className="row mt-5">
 <div className="col-md-4">
 <label>Total Project</label>
 </div>
  <div className="col-md-4 ml-5">
 <label>10</label>
 </div>
 </div>

 <div className="row mt-4">
 <div className="col-md-4">
 <label>English Level</label>
 </div>
  <div className="col-md-4 ml-5">
 <label>Expert</label>
 </div>
 </div>

 <div className="row mt-4">
 <div className="col-md-4">
 <label>Avaliability</label>
 </div>
  <div className="col-md-4 ml-5">
 <label>6 MOnths</label>
</div>
 </div>
</div>
</div>
</div>
</form>
</div>
     
            
        </>
    )
}

export default About
