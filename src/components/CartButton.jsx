
import React, {useState} from "react"
const CartButton = () => {
   
    const [count,setCount]=useState(0)
    const handleClick=(value)=>{
      setCount(count+value)
    }
  return(
<>
  <div>
  {count>0 ? (
    <>
    <button onClick={() => handleClick(-1)} className="minus">-</button>
      <p className="count-item">{count}</p>
      <button onClick={() => handleClick(+1)} className="plus">+</button>
    </>
  ):(
    <p onClick={() => setCount((prevCount)=>(prevCount +1))}>Add to Cart</p>
  )}
  </div>
  </>
  );
};
export default CartButton;
