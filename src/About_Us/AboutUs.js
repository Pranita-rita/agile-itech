import React,{useState} from "react";
import "./AboutUs.scss";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Add, Remove } from '@mui/icons-material';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const accordion_data=[
{
    question:'Intensive Training:',
    answer:'Hands-on, practical training designed to get you job-ready',
},
{
    question:'Placement:',
    answer:'Job assistance through resume and mock interview prep to crack multiple job openings to help you start your career',
  },

  {
  question:'Certified Faculty:',
  answer:'Top industry experts as faculty with more than 8 years of relevant domain knowledge experience',
},
{
  question:'Solve Real World Cases:',
  answer:'Updated & industry relevant content with multiple real world case studies & projects',
},

{
  question:'Course Completion Certificate:',
  answer:"Get Industry recognised certifications to get placed in top MNC's.",
}
]

const slider_data = [
  {
    avatar_link:"https://agileitech.com/wp-content/uploads/2022/09/Untitled-design-2.png",
    avatar_content:"We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.",
    name:"Michael Bean",
    designation:'Web Developer'
  },
  {
    avatar_link:"https://agileitech.com/wp-content/uploads/2022/09/Untitled-design-2.png",
    avatar_content:"We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.",
    name:"Michael Bean",
    designation:'Web Developer'
  },
  {
    avatar_link:"https://agileitech.com/wp-content/uploads/2022/09/Untitled-design-2.png",
    avatar_content:"We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.",
    name:"Michael Bean",
    designation:'Web Developer',
  }
]


  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa fa-chevron-left"></i>
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa fa-chevron-right"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow/>,
    nextArrow: <CustomNextArrow />,
  };
  
export default function AboutUs(){

    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange =
      (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <>
        <div>
          <div className="banner_section col-md-12 mx-auto col-sm-12 mx-auto col-12 mx-auto">
           <div className="container banner_container">
            <div className="banner_content default_text_resources">
           <h1 style={{color:"white", fontWeight:'normal'}}>
            About Simplilearn
           </h1>
            </div>
           </div>
          </div>

      <div  className="container"> 
          <div className="col-sm-12 col-md-12 col-12 simply_learn_content">
             <h5 className="m-5 para_text">Simplilearn is the world's #1 online bootcamp and one of 
                the world's leading certification training providers. We 
                partner with companies and individuals to address their
                unique needs, providing training and coaching that helps
                working professionals achieve their career goals.</h5>
            <div className="flex_chainging">
             <div className="col-md-3 circle_wrap_outer">
                <div className="circle_wrap rounded1"><Person4OutlinedIcon className="personOutlinedIcon"/></div>
                <h2>5,000,000+</h2>
                <p className="icon_sub_heading">Professionals Trained</p>
             </div>
             <div className="col-md-3 col-sm-6 circle_wrap_outer">
                <div className="circle_wrap rounded1"><ShieldOutlinedIcon className="personOutlinedIcon"/></div>
                <h2>2,000+</h2>
                <p className="icon_sub_heading">Quaified Trainers</p>
             </div>
             <div className="col-md-3 col-sm-6 circle_wrap_outer">
                <div className="circle_wrap rounded1"><AutoStoriesOutlinedIcon className="personOutlinedIcon"/></div>
                <h2>400+</h2>
                <p className="icon_sub_heading">Courses</p>
             </div>
             <div className="col-md-3 col-sm-6 circle_wrap_outer">
                <div className="circle_wrap rounded1"> <BsGlobeCentralSouthAsia className="personOutlinedIcon"/></div>
                <h2>40+</h2>
                <p className="icon_sub_heading">Global Accreditations</p>
             </div>
             </div>
          </div> 

      </div>

      <div className="col-md-12 mx-auto col-sm-12 mx-auto col-12 mx-auto mission_container mt-4">
      <div className="mission_section p-4">
           <h3 className="pt-3">Mission</h3>
           <p className="mission_para_text pt-3">We transform lives by empowering people via digital skills</p>
      </div>
      </div>
      
      <div className="mission_who_we m-5" style={{textAlign:"left"}}>
      <h3>Who we are</h3>
      <p className="mission_who_paratext pt-3">
        Founded in 2010 and based in San Francisco, California, and 
        Bangaloore, India, Simplilearn, a Blackstone portfolio company, is 
        the world's #1 online Bootcamp for digital economy skills training.
        Simplilearn offers access to world-class work-ready training to 
        individuals and businesses worldwide. The Bootcamps are 
        designed and delivered with world-renowned universities, top
        corporations, and leading industry bodies via live online classes
        featuring top industry practitioners, sought-after trainers, and 
        global leaders. From college students and early career
        professionals to managers, executives, small businesses, and big
        corporations, Simplilearn's role-based, skill-focused, industry-recognized,
        and globally relevant training programs are ideal 
        upskilling solutions for diverse career or/and business goals.
        According to our recent survey conducted* with Ernst & Young
        LLP (EY) as Process Advisors, 9/10 of Simplilearn learners achieve
        their learning objectives upon successfully completing Simplilearn
        courses - reinforcing our commitment to delivering world-class,
        highly engaging, and outcome-driven professional upskilling 
        programs designed for success.
      </p>
      </div>
    

      <div className="col-md-12 mx-auto col-sm-12 mx-auto col-12 mx-auto mission_container">
      <div className="mission_section p-4">
           <h3 className="pt-3">Rvission</h3>
           <p className="mission_para_text pt-3">We transform lives by empowering people via digital skills</p>
      </div>
      </div>
      <div className="mission_who_we m-5" style={{textAlign:"left"}}>
      <h3>Who we are</h3>
      <p className="mission_who_paratext pt-3">
        Founded in 2010 and based in San Francisco, California, and 
        Bangaloore, India, Simplilearn, a Blackstone portfolio company, is 
        the world's #1 online Bootcamp for digital economy skills training.
        Simplilearn offers access to world-class work-ready training to 
        individuals and businesses worldwide. The Bootcamps are 
        designed and delivered with world-renowned universities, top
        corporations, and leading industry bodies via live online classes
        featuring top industry practitioners, sought-after trainers, and 
        global leaders. From college students and early career
        professionals to managers, executives, small businesses, and big
        corporations, Simplilearn's role-based, skill-focused, industry-recognized,
        and globally relevant training programs are ideal 
        upskilling solutions for diverse career or/and business goals.
        According to our recent survey conducted* with Ernst & Young
        LLP (EY) as Process Advisors, 9/10 of Simplilearn learners achieve
        their learning objectives upon successfully completing Simplilearn
        courses - reinforcing our commitment to delivering world-class,
        highly engaging, and outcome-driven professional upskilling 
        programs designed for success.
      </p>
      </div>

   {/* accordian_container--------------------------- */}
      <div className="accordian_container container">

        <div className="accordian_heading_container">
        <h2 className="accordian_heading">
            Our Focussed-Services Emphasize About
        </h2><br/>
        </div>

       <div className="col-md-10 mx-auto accordian_layout">
    

       <div>
    {accordion_data.map((e,i)=>
      <Accordion className="accordion pl-2 pr-2 pt-1" style={{border:'none',boxShadow:'none',margin:'0px',backgroundColor:'#F4F5F6',borderColor:'#F4F5F6', }} 
      expanded={expanded === 'panel'+String(i)} onChange={handleChange('panel'+String(i))}>
        <AccordionSummary
          expandIcon={expanded==='panel'+String(i)?<i class="fa fa-minus-circle" aria-hidden="true" style={{color:"#007CBAF8"}}></i>:<i class="fa fa-plus-circle" aria-hidden="true" style={{color:"#000"}}></i>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
          <Typography >
           <div className={expanded === 'panel'+String(i)?'expanded_accordion_heading':'default_accordion_heading'}>{e.question}</div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion_paratext" style={{textAlign:'left'}}>
          {e.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
)}
      
    </div>


       </div><br/>

      </div>

      {/* accordian_container end--------------------------- */}


      <div className="container mt-3 col-md-9 mx-auto col-sm-10 mx-auto col-10 mx-auto">
        <h2 className="testimonial_heading">Look at our Testimonial</h2>

         <Slider {...settings} className="mt-5s">
          {slider_data.map((data,index)=>
      <div className="avatar_alignment container mt-4">
      <Stack direction="row" spacing={2} style={{justifyContent:"center"}}>
      <Avatar alt="Travis Howard" sx={{width:100,height:100}} src={data.avatar_link} />
    </Stack>
     <p className="slider_para_text mt-3">
      {data.avatar_content}
     </p>
        <h5 className="michaelBean">{data.name}</h5>
        <h5 className="webDeveloper">{data.designation}</h5>
      </div>)}

{/* 
      <div className="avatar_alignment container mt-4">
      <Stack direction="row" spacing={2} style={{justifyContent:"center"}}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    </Stack>
     <p className="slider_para_text mt-3">We were treated like royalty. Needless to say we are extremely
        satisfied with the results. Thank you for making it painless,
        pleasant and most of all hassle free! It fits our needs perfectly.
     </p>
        <h5 className="michaelBean">Michael Bean</h5>
        <h5 className="webDeveloper">Web Developer</h5>
      </div>

      <div className="avatar_alignment container mt-4">
      <Stack direction="row" spacing={2} style={{justifyContent:"center"}}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    </Stack>
     <p className="slider_para_text mt-3">We were treated like royalty. Needless to say we are extremely
        satisfied with the results. Thank you for making it painless,
        pleasant and most of all hassle free! It fits our needs perfectly.
     </p>
        <h5 className="michaelBean">Michael Bean</h5>
        <h5 className="webDeveloper">Web Developer</h5>
      </div>

      <div className="avatar_alignment container mt-4">
      <Stack direction="row" spacing={2} style={{justifyContent:"center"}}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    </Stack>
     <p className="slider_para_text mt-3">We were treated like royalty. Needless to say we are extremely
        satisfied with the results. Thank you for making it painless,
        pleasant and most of all hassle free! It fits our needs perfectly.
     </p>
        <h5 className="michaelBean">Michael Bean</h5>
        <h5 className="webDeveloper">Web Developer</h5>
      </div> */}

    </Slider>
      </div><br/>


{/* __________footer______________ */}
      <div className="footer_section md-12">
           <div className="footer_container">
            <div className="footer_content default_text_resources p-5 text-white" >
           <h1 className="footer_banner_heading">
                 Build your path to success with AgileiTech.
           </h1>
           <h5 className="footer_banner_subHeading mt-3">Register for free demo classes now...!</h5>
           <button className="enroll_now_button p-1 pr-3 pl-3 mt-3">Enroll Now</button>
            </div>
           </div>
       
          </div>

          </div>
        </>
    )
}