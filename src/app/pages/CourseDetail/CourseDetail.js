import React from "react";
import * as imports from "../../utils/Imports";
import "./CourseDetail.scss";
import Tabs from "../../Components/Tabs/Tabs";
import CourseValueCard from "./CourseValueCard/CourseValueCard";
import Technologies from "../../Components/Technologies/Technologies";
import CourseSyllabus from "../../Components/CourseSyllabus/CourseSyllabus";

const tab_data = ["Overview","Instructor","Reviews","Faq"];

const related_jobs = ["Full Stack Web Developer","Full Stack Python Developer","Font-End Developer","Web Developer",
"Back-End Developer","Web Designer","Full-Stack Developer"];

const Technology = ["Agile", "Scrum","Scripting", "UI design", "UX", "Database management",
"Backend process", "DevOps using Python"]
export default function CourseDetail(){
    return(
        <>
        <div className="courseDetails_content container p-0 mt-5">

        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
        <h1>Introduction to Javascript for <br/>
            Beginners Students
        </h1>
        <Tabs tab_data={tab_data}/>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <CourseValueCard/>
        </div>
        </div>

        <div className="container mt-3">
        
        <div className="Chech_button p-4 mt-4">
        <h5 style={{fontWeight:'bold'}}> Technologies You Will Master Hands-On</h5>
            <Technologies Technology={Technology}/>
        </div>

        </div>
        <br/>
        <div className="related_jobs_content container">
                   <h5 style={{fontWeight:'bold'}}>Related job roles</h5>
                   {/* <ul> */}
                   {related_jobs.map((e,i)=>
                   <span className="p-2 mt-3 related_jobs_layout">{e}</span>
                
                   )}
                   {/* </ul> */}
        </div>
        <br/>

        <div className="container course_syllabus_content">
            <CourseSyllabus/>
        </div>

        </>
    )
}