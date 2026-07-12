import {usestate} from "react"
export default function Card()
{
    const [val,setVal]=usestate(0);
    return<>
    <h1>Card Page</h1>
    <h2>{val}</h2>
    <button className="btn" onClick={()=>{setVal(val+1)}}>+</button>
    <button className="btn" onClick={()=>{setVal(val-1)}}>-</button>
    </>
}