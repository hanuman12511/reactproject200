import { useState } from "react"
import { useLocation } from "react-router-dom"

export default  function Cart(){
const loc =useLocation()
const [data,setData] = useState(loc.state)
console.log(data);

    return (
        <h1>Cart screen</h1>
    )
}