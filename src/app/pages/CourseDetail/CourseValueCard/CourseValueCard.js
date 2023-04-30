import React from "react";
import "./CourseValueCard.scss";
// import Divider from "@mui/material/Divider";
import Divider from "../../../Components/Divider/Divider";
import * as imports from "../../../utils/Imports";

export default function CourseValueCard(){

const course_price_data=[
    {
        key:"Enrolled",
        value:"94 Students",
        icon:'https://edusphere.radiantthemes.com/wp-content/plugins/radiantthemes-addons/assets/images/users.svg'
    },
    {
        key:"Time Span",
        value:"32 hours",
        icon:'https://edusphere.radiantthemes.com/wp-content/plugins/radiantthemes-addons/assets/images/time.svg'
    },
    {
        key:"Lectures",
        value:"16",
        icon:'https://edusphere.radiantthemes.com/wp-content/plugins/radiantthemes-addons/assets/images/shout.svg'
    },
    {
        key:"Video Lesson",
        value:"2 Hours",
        icon:'https://edusphere.radiantthemes.com/wp-content/plugins/radiantthemes-addons/assets/images/play-button.svg'
    },
    {
        key:"Level",
        value:"Advanced",
        icon:'https://edusphere.radiantthemes.com/wp-content/plugins/radiantthemes-addons/assets/images/graphic.svg'
    },
]



    return(
        <>
        <div className="courseValueCard_content container d-flex p-2" style={{justifyContent:'space-around'}}>
            <div >Course<br/> Value</div>
            <div style={{fontWeight:'550'}}>$55.00</div>
        </div>
        
        <div className="course_content pt-3">
        {course_price_data.map((e,i)=>
       <>
        <div className="d-flex  pt-4" style={{justifyContent:'space-around'}}>
       
          <div className="d-flex col-lg-8 ">
            <div style={{color:'grey'}}>{e.key}</div>
            : <div style={{fontWeight:'500'}} className="ml-1"> {e.value}</div>
        </div>
          <div ><img style={{width:'32%',float:'right'}} src={e.icon} alt='icons'/></div> 
          
         
   </div>
     
        <Divider/>
    </>
         )}
         <br/><br/>
         <div className="button_content ml-2 col-lg-12" >
          <button className="button p-2">BUY THIS COURSE</button>
          </div>
          <br/>

          <div style={{textAlign:'center',color:'#015abd',}}>
            <span >Share This Course</span>
            <span style={{ cursor:'pointer'}} className="ml-4 share-icon fas fa-share-alt"></span>
          </div>
         </div>
        
        </>
    )
}
