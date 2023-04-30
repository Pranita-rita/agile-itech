import React from "react";
import "./Technologies.scss";
import * as imports from "../../utils/Imports";

export default function Technologies(props){
    return(
        <div >
        {(props.Technology).map((e,i)=>
        <div className=" technologies_content p-1 mr-5">

            <imports.Check style={{color:"green"}}  className="Check"/><span> {e} </span>
        </div>
        )}
        
        </div>
    )
}