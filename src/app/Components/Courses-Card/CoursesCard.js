import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import StarRating from '../Start-Rating/StarRating';
import "./CoursesCard.scss";
import PriceRound from '../Price-Round/PriceRound';
import { makeStyles } from '@material-ui/core/styles';

const cardContents = [
    {
    id:1,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-02.jpg",
    course_price:"free",
    designation:"Development",
    title:"Open Programming Courses for Everyone Copy",
    review:"3.40",
    lessons:"4",
    students:"317"
    },
    {
    id:2,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-08.jpg",
    course_price:"10.00",
    designation:"Computer Science",
    title:"Customer-Centric Info-Tech Strategies In University",
    review:"4.00",
    lessons:"4",
    students:"0"
    },
    
    {
    id:3,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-07.jpg",
    course_price:"14.00",
    designation:"Computer Science",
    title:"Problem Solving Skills For Better Success",
    review:"5.00",
    lessons:"5",
    students:"0"
    },
    
    
    {
    id:4,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-06.jpg",
    course_price:"15.00",
    designation:"Computer Science",
    title:"Master JQuery In A short Period of Time",
    review:"4.50",
    lessons:"6",
    students:"0"
    
    },
    
    
    {
    id:5,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-05.jpg",
    course_price:"free",
    designation:"Computer Science",
    title:"Web Design Instruments For Communication",
    review:"4.00",
    lessons:4,
    students:0
    },
    
    {
    id:6,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-04.jpg",
    course_price:"18.00",
    designation:"Computer Science",
    title:"Show Passion With Lansscape Photography",
    review:"5.00",
    lessons:"4",
    students:"0"
    },
    
    
    {
    id:7,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-03.jpg",
    course_price:"free",
    designation:"Computer Science",
    title:"Learning To Script Write As A Professional Author",
    review:"4.00",
    lessons:"4",
    students:"0"
      },
    
    {
    id:8,
    image_link:"https://edusphere.radiantthemes.com/wp-content/uploads/2020/09/Course-02.jpg",
    course_price:"12.00",
    designation:"Computer Science",
    title:"A Short Course To Be A Master In Management",
    review:"4.33",
    lessons:"3",
    students:"0"
    
    }
    
    ]

    const useStyles = makeStyles({
      card: {
        transition: 'box-shadow 0.3s ease-in-out',
        cursor:'pointer',
        '&:hover': {
          boxShadow: '0 16px 26px rgba(0, 0, 0, 0.5), 0 -8px 16px rgba(0, 0, 0, 0.5)',
         
        },
      },
    });
export default function CoursesCard() {
  const classes = useStyles();
  return (
    <div className="container m-0 p-0">
    <div className="row">
    
    
    {cardContents.map((e,i)=>    
    <div className='col-lg-3 col-md-4 col-sm-4 col-12 mt-4'>
    <Card sx={{ maxWidth:500 }} 
    className={classes.card}
    // class="Courses_Card col-12"
    >  
      <CardMedia
        className="Card_Image"
        component="img"
        alt="green iguana"
        height="200"
        image={e.image_link}
      />
      <PriceRound price={e.course_price}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="Designation_content" color="text.secondary">
          {e.designation}
        </Typography>
        <Typography variant="body2" sx={{color:"#222222", fontWeight:"550"}}>
          {e.title}
        </Typography>
       
          <StarRating ratingVal={e.review}/>
          
        {/* **************starts rating here ***************/}

      </CardContent>
      <CardActions>
       <span className="lessons">
        <i class="fas fa-book mr-1"></i>
        {e.lessons} Lessons
       </span>
       <span className={e.students === '0' ? 'student' : 'students'}>
        <i class="far fa-user mr-1"></i>
        
         { e.students==='0'
          ?
          `${e.students} Student`
          :
          `${e.students} Students`
          }

        
        
       </span>
      </CardActions>
    </Card>
    </div>
    )}
    
   
     </div>
    </div>
  );
}