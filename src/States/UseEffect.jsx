import { useState,useEffect } from "react";

 function UseEffect(){
let booktitle="ikigai"
let [price,setPrice]=useState(500);
 let [qn,setQn]=useState(1);

let pr=500;

 useEffect(()=>{
    setPrice(pr*2);
},[qn])

return <>

  <div>
    <h2>BookName:{booktitle}</h2>
   <h2>Price:{price}</h2>
  <h2>Quntity:{qn}</h2>
   <button onClick={()=>{setQn(qn+1)}}>+</button>
     <button>-</button>
   </div>
</>
}

export default UseEffect;
