import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Productdetails(){
    const nav = useNavigate()
    const loc =useLocation()
    const [data,setData] = useState(loc.state)
   let [rate,setRate] = useState(loc.state.rate)
   let [totalrate,setTotalRate] = useState(rate)
   let [qty,setQty]=useState(1)
console.log(data);  
function setRatedata(qty){
    console.log(qty);
    console.log(rate);
    setTotalRate(rate*qty)
}
function addqty(){
    console.log("add");
    if(qty>=1){
        qty+=1
       
    }
    setQty(qty)
    setRatedata(qty)

}
function subqty(){
    console.log("sub");
    if(qty>1){
        qty=qty-1
       
    }
    setQty(qty)
    setRatedata(qty)
}

  return(
        <>
        <div className="pdetails">
            <div className="pdetails-img">
                <img src={data.image} />
            </div>    
            
            <div className="pdetails-text">
                <p>{data.productname}</p>
                <p>Rs.{data.rate}/-</p>
                <button onClick={subqty}>
                    <span>-</span>
                </button>
                <span>{qty}</span>
                
                <button onClick={addqty}>
                <span>+</span>
                
                </button>
            </div>    
            
            <div className="pdetails-pay">
                <p>Total pay:{totalrate}</p>
                <button onClick={()=>nav('/cart',{state:{name:data.productname,rate:totalrate,qtyproduct:qty}})}>Addtocart</button>
                <button onClick={()=>nav('/cart',{state:{name:data.productname,rate:totalrate,qtyproduct:qty}})}>Buy Now</button>
            </div>    
        </div>
        </>
    )
}