import {useState} from "react"
export default function Form(){
    let [user,setUser]=useState("");
    let temp;

    function handleChange(e){
        e.preventDefault()
        temp=e.target.value;
    }
    function getSubmit(){
       setUser(temp)
    }

    return <>
    <form onSubmit={getSubmit}>
        <input type="text" name="" id=""  placeholder="Enter USerName:" onChange={handleChange}/><br></br>
        <input type="password" name="" id="" placeHolder="Enter Password"/><br></br>
        <input type="submit" value="Login" />
        <h1>{user}</h1>
    </form>
    </>
}