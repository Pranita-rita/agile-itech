import React from "react";
import * as imports from "./../../../utils/Imports";
import "./Instructor.scss";
import Instroctor_Image from  "../../../assets/Images/Instroctor_Image.jpg";
import Teachers_Course1 from "../../../assets/Images/Teachers_Course1.jpg";
import Teachers_Course2 from "../../../assets/Images/Teachers_course2.jpg";
import Divider from "../../Divider/Divider";

const teachers_course =[
    {
        src:Teachers_Course1,
        designation:"Development",
        title:"Speed Reading Techniques In University For Everyone",
        price:"$20.00"
    },
    {
    src:Teachers_Course2,
    designation:"Designing",
    title:"Customer-Centric Info-Tech Strategies In University",
    price:"FREE"
}
]
export default function Instructor(){
    return(
        <>
        <div className="d-flex">
               
               <div className="col-lg-5 col-md-5 col-sm-12 col-12 p-0 m-0">
               <img
         style={{width:'100%'}}
         
         src={Instroctor_Image}
         alt="Overview-Image"/>

         <h5 className="Instroctor_name mt-4">Sophia Richards</h5>

         <p className="Instroctor_designation mt-4">Professional Photographer</p>

         <div className="Instr_subDetails">Mail ID : <a href='#' style={{fontSize:'0.85rem'}}>xyz@abc.com</a></div>
         <div className="Instr_subDetails">Web : <a href='#'  style={{fontSize:'0.85rem'}}>https://edusphere.radiantthemes.com</a></div>

         {/*___________________insta face blalbal____________________*/}
            </div>

               <div className="col-lg-7 col-md-7 col-sm-12 col-12 ml-2">
                  <h2 style={{fontWeight:'bold'}} className="sophiaHeading">Sophia Richards</h2>
                  <Divider/>
                  
                    <h5 style={{fontWeight:'bold'}} className="mt-4">About Instructor</h5>
                  {/* <br/> */}
                  <p className="Instr_paratext mt-3">
                  Sophia is one of our highly experienced and talented in-house educational
                  consultants that excel in all forms of career counselling as well as consultancy. She
                  is a graduate in Mass Communications from UCLA, and also holds a degree in 
                  Statistics from MIT. Meeting her for the first time would instill a sense of faith,
                  trust and bonding that is unparalleled. She perfectly understands your requirement
                by being in your shoes, and thereby tailoring an extensive educational package.
                Sophia is very well-informed in all aspects of career consultancy, thus can guide you 
                through some of the best educational institutions in Europe and the Americas.
                </p>
                <h5 style={{fontWeight:'bold'}}>Teacher Courses</h5>
                <div className="d-flex">
               {teachers_course.map((e,i)=>
               
                    <div className="teachCource_card col-lg-6 col-sm-6 col-sm-12 col-12 p-0 mr-3">
                          <img style={{width:'100%'}} src={e.src} alt="teachers"/>
                          <div className="img_sub_section">
                          <div className="Instroctor_designation mt-2" style={{fontSize:'0.85rem'}}>{e.designation}</div>
                          <div className="Instr_paratext mt-1" style={{color:'#222222', fontWeight:'400'}}>{e.title}</div>
                          <Divider/>
                          <div style={{float:'right'}} className="mt-2">{e.price}</div>
                          <br/><br/>
                          
                          </div>
                          </div>
                         
)}</div>
               </div>
               <br/>
                
        </div>
        </>
    )
}