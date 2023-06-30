import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Productdetails(){
    const loc =useLocation()
    const [data,setData] = useState(loc.state)

console.log(data);    return(
        <>
        <h1>Details</h1>
        </>
    )
}