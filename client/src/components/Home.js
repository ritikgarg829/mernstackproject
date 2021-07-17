import React from 'react'
import Styles from "../Home.module.css";


const Home = () => {
    return (
      <>
      <div className={Styles.homediv}>
        <div className={Styles.homecontent}>
          <p className={Styles.text}>HELLO</p>
          <h1>WELCOME TO <span style={{color:'blue'}}>RITIK GARG</span> WEBSITE</h1>
        </div>
        </div>
        </>
    )
}

export default Home
