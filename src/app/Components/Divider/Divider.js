import React from "react";

export default function Divider(props){
    return(
        <>
        <div className={props.marginLess===true?"instructor-devider mb-3":"instructor-devider mt-3"}></div>
        </>
    )
}