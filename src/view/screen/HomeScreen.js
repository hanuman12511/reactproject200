import { useEffect, useState } from "react"
import {product} from '../data/data'
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function HomeScreen(){
const nav = useNavigate()
  const [user,setUser] = useState(localStorage.getItem("user"))

  const[product1,setProduct] =useState("")

  function logout(){
    localStorage.clear()
    window.location.reload()
  }
useEffect(()=>{
 async function show(){
console.log("USEEFFECT");
 
const res= await axios.get("http://ankursingh.xyz/api/productshow.php")
console.log(res.data);

const productdata = res.data.body
console.log(productdata);

setProduct(productdata)
}
  show()

},[])


  console.log(product1);
    return(
      <>
      
      <h1> HomeScreen</h1>
      <div className="product-div">



       {
       
       product1&&product1.map(d=>(
 <div className="productshow" onClick={()=>nav('details',{state:d})}>
 <img src={d.image}  className="prodcutimage"/>
 <p>{d.product_name}</p>
 <p>Rs.{d.product_rate}/-</p>
 </div>
      )) 

 } 
</div>
     </>
    )
  }