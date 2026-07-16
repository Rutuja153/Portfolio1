import { useRef, useState } from "react"

export default function Ref(){
   
    let username="admin"
    let pass="admin@123"

    let myref=useRef("")
    let myref1=useRef("")
    let buttonref=useRef("")

    const [msg,setMsg]=useState("")

    function getSubmit(){
     
       myref.current.style.color="red"
       myref.current.style.backgroundColor="yellow"

       myref1.current.style.color="red"
       myref1.current.style.backgroundColor="yellow"

       buttonref.current.style.color="red"
       buttonref.current.style.backgroundColor="yellow"
        
     if (username==myref.current.value && pass === myref1.current.value)
         {
      setMsg(" Login Successfully");
     } 
    else 
        {
      setMsg(" Login Unsuccessfully");
    }
    }

   return <>
    <input type="text" name="" id=""  placeholder="Enter your name...." ref={myref}/>
    <br/><br/>
    <input type="text" name="" id="" placeholder="Enter your password" ref={myref1} />
    <br/><br/>
    <button ref={buttonref} onClick={()=>{getSubmit()}}>LOGIN</button>
    <h1>{msg}</h1>
   </>
}