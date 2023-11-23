import React from 'react'
import Classes from './home.module.css';
import { useNavigate } from "react-router-dom"; 

export default function Home() {

  const navigate=useNavigate();
  const IsToken=()=>{
  const myData=localStorage.getItem('token');
    if(myData){
      navigate("/mainPage");
    }else{
      navigate("/login")
    }
  }
  return (
    <>
   <div className={Classes.box}>
        <div className={Classes.border}>
          <p className={Classes.tittle}>Technology<br/>creates the future.</p>
          <p className={Classes.smtit}>Kee is the Al-powered format for your work & ideas.</p>
        </div>
   </div>
   <div className={Classes.end}>
     <button onClick={IsToken}>进入</button>
   </div>
   </>
  )
}
