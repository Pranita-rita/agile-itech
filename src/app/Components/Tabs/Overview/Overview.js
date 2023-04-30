import React from "react";
import "./Overview.scss";

export default function Overview(){
    return(
        <>
        <div>
           <img
         style={{width:'100%'}}
         className='pl-0'
         src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-26-new.jpg"
         alt="Overview-Image"/>
        
        </div><br/>

        <div className="overview_paratext_content">
            <p className="paratext">
                Praesent non maximus ligula. Ut eleifend id nisl quis interdum. Sed malesuada 
                tortor non turpis semper bibendum. Ut ac nisi porta, malesuada risus non, viverra
                dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae in tristique libero, quis ultrices diam. 

            </p><br/>
            <h5 className="course_heading">COURSE DESCRIPTION</h5>
            <p className="paratext mt-3">Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis
                semper bibendum. Ut ac nisi porta, malesuada risus non,viverra dolor. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae in 
                tristique libero, quis ultrices diam. Praesent varius diam dui. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra.
                </p>
                <br/>
                <h5 className="course_heading">MAIN FEATURES</h5>
          <ul className="paratext mt-3 ml-0 pl-3 " >
            <li className="dot"> Achieve Hollywood best quality visuals out of the box.</li>
            <li className="dot"> With complete C++ source code aceess, you can study.</li>
            <li className="dot"> Comes with designer-friendly Blueprint visual scripting.</li>
            <li className="dot"> Unreal Engine provides Robust Multiplayer Framework.</li>
            <li className="dot"> The built-in Cascade visual effects editor enables particles.</li>
            <li className="dot"> Unreal Engine 4's Material Editor makes uses of physically-based.</li>
          </ul>
          <br/>
          <h5 className="course_heading">WHAT IS THE TARGET AUDIENCE?</h5>
            <p className="mt-3 paratext">
                Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis
                semper bibendum. Ut ac nisi porta, malesuada risus non, viverra dolor. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae in 
                tristique libero, quis ultrices diam.
            </p>
        </div>
        </>
    )
}