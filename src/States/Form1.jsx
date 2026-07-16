import {useState} from "react"

export default function Form1(){
    let [formdata,setFormData]=useState({
        name: "",
        email: "",
        city: "",
        mobile: ""
    })

    function handleChange(e){
        setFormData({
            ...formdata,
        [e.target.name]:e.target.value
        })

    }
    
    function handleSubmit(e){
        e.preventDefault()

        console.log(formdata);

            setFormData=({
            name: "",
            email: "",
            city: "",
            mobile: ""
        })

    }

    return <>
    <from action="" onSubmit={handleSubmit} >
        
        <input type="text" name="name" id="" placeholder="Enter Name:" value={formdata.name} onChange={handleChange}/><br />
        <input type="text" name="email" id="" placeholder="Enter Email:" value={formdata.email} onChange={handleChange}/><br />
        <input type="text" name="city" id="" placeholder="Enter City" value={formdata.city} onChange={handleChange}/><br />
        <input type="text" name="mobile" id="" placeholder="Enter MobileNo:" value={formdata.mobile} onChange={handleChange}/><br />
    <button type="Submit">Submit</button>
        </from></>
}