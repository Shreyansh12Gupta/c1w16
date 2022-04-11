import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import './AllPage.css'

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1 className="head">Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
   {
       data.map((e)=>(
           <GroceryItem{...e}/>
       ))
   }
       
       
        </div>
        </>
    )
}
export default GroceryDetails