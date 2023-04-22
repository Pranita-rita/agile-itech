import React from "react";
import "./PriceRound.scss";

export default function PriceRound(props){
    console.log(props)
    return(

        <> 
        <div className="price_display_content">
            {
                props.price==='free'| props.price==='Free'| props.price==='FREE'
                ?
               `${props.price}`
                :
                `$${props.price}`
            }
               
        </div>
        
        </>
    )
}