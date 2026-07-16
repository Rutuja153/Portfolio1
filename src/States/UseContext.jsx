import { createContext } from "react"

let myContext=createContext();
export default function Context(){
    let user="Rutuja"
    return <myContext.Provider value={user}>
    <Fun1/>
    </myContext.Provider>
}

function Fun1(){
    <Fun2/>
}

function Fun2(){
    let username=useContext(myContext)
    return <h1>Hello {username}</h1>
}