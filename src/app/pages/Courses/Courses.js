import React,{useState} from 'react';
import "./Courses.scss";
import CoursesCard from '../../Components/CoursesCard/CoursesCard';
import Pagination from "../../Components/Pagination/Pagination";
import * as imports from "../../utils/Imports";
import CourseDetail from '../CourseDetail/CourseDetail';

const Category = [
    "Select Category","Computer Science","Designing","Development","Development",
    "Home one course", "Management", "Photography","Science","Technology"
]


export default function Courses(){

    const [courseDetail,setCourseDetail] = useState(false);


const courseDetails = () =>{
    setCourseDetail(true);
}
    return(
        <>
        {courseDetail
        ?
        <CourseDetail/>
    :
    
        <div>
                
            <div className="nav_content_backimage col-lg-12 col-md-12 mx-auto col-sm-12 mx-auto col-12 mx-auto">
                <section className='nav_image_contents container'>
                <h5 className="nav_image_subhead">Start With</h5>
                <h1 className="nav_Image_heading">Professional Online
                    <br/>
                    Courses For Achievers
                </h1>
                </section>
            </div>


            <section className="Courses_Input_Section">
                  <form className="Courses_Input_Form">

                      <div className="Inputs_Section">

                        <div className="Select_Category_Section col-lg-5 mx-auto col-md-3 mx-auto col-sm-5 mx-auto col-12 mx-auto">
                            <select className="category_dropdown">
                            {Category.map((data,i)=>
                                <option value={data}>{data}</option>
                                )}
                            </select>
                        </div>

                        <div className="Enter_keyword_Section col-lg-7 mx-auto col-md-9 mx-auto col-sm-7 mx-auto  col-12 mx-auto">
                            <input className="Enter_Keyword_Input col-lg-9 col-md-8 col-sm-7 col-12" type="text" placeholder="Enter keyword here" autoComplete="off"/>
                            <input className="Search_Course_Submit col-lg-3 col-md-4 col-5 col-12" value="SEARCH COURSE" style={{width:"100%"}}  type="submit"/>
                        </div>

                      </div>
                
                  </form>
                </section>
                  

            <div className="Course_Card_Section mt-5"> 

                <h2 className="mb-2">Professional Online Courses</h2>
                <p className="Online_Course_Subheading col-lg-7 col-md-7 col-sm-7 col-12 m-0 p-0">Offering miscellaneous courses and online programs for fresh university graduates or
                    college pass outs that want to pursue an aspiring career.
                </p>
                 <br/>
                
                <div>
                <CoursesCard onClick={()=>courseDetails}/>
                </div>
            </div>

            <section className="pagination_section container mt-4">
                <div className="col-lg-5 mx-auto col-md-5 mx-auto col-sm-12 mx-auto col-12 mx-auto">
                    <Pagination/>
                </div>
            </section><br/>

        </div>
        }
        </>
    )
}