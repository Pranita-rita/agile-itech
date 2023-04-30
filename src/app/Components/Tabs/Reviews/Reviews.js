import React from "react";
import StarRating from "../../StartRating/StarRating";
import "./Reviews.scss";
import Divider from "../../Divider/Divider";

const rating=[
    {
        ratingVal:'5',
        ratingBarVal:'67%'
    },
    {
        ratingVal:'4',
        ratingBarVal:'33%'
    },
    {
        ratingVal:'3',
        ratingBarVal:'0%'
    },
    {
        ratingVal:'2',
        ratingBarVal:'0%'
    },
    {
        ratingVal:'1',
        ratingBarVal:'0%'
    }
    
]

const reviews=[
    {
        image:"https://edusphere.radiantthemes.com/wp-content/uploads/learn-press-profile/1/e1c26e949b56bd80cb5c9ffdab901b4e.jpg",
        name:"Sophia Richards",
        title:"We learn a lot from here",
        explanation:"If you are going to use a passage of Lorem Ipsum, you \
        need to be sure there isn't anything embarrassing \
        hidden in the middle of the text. All the Lorem Ipsum \
        generators on the Internet tend to repeat predefined \
        chunks as necessary",
        ratingVal:'4'
    },
    {
        image:"https://secure.gravatar.com/avatar/73b4139debef2ee43e62b9af56059117?s=192&d=mm&r=g",
        name:"Mark Jones",
        title:"Very easy to understand",
        explanation:"There are many variations of passages of Lorem\
        Ipsum available, but the majority have suffered \
        alteration in some form, by injected humour, or \
        randomised words which don't look even slightly \
        believable",
        ratingVal:'5'
    },
    {
        image:"https://secure.gravatar.com/avatar/1f080ddad52415225f140985a0e1a10c?s=192&d=mm&r=g",
        name:"Radiant Themes",
        title:"Very helpful course",
        explanation:"Lorem Ipsum has been the industry's standard \
        dummy text ever since the 1500s, when an unknown \
        printer took a galley of type and scrambled it to make \
        a type specimen book. It has survived not only five centuries.",
        ratingVal:'5'
    },
]

export default function Reviews(){
    return(
        <>
            <div className="md-12 d-flex">
           
                  <div className="col-lg-8 col-md-9 col-sm-12 col-12 m-0 p-0">
                  {rating.map((e,i)=>
                  <div className="d-flex">
                    <StarRating review={true} ratingVal={e.ratingVal} />
                    
                    <div className="review_bar mt-4" >
                        <div className="sub_bar" style={{width:`${e.ratingBarVal}`}}></div>
                        
                    </div>
                    <span className="mt-3 ml-2">{e.ratingBarVal}</span> 
                    </div>
                    )}
                  </div> 

                  <div className="rating_subCard col-lg-3 col-md-4 col-sm-12 col-12 ml-4">
                    <div className="d-flex">
                
                <StarRating  ratingVal={4.6}/>
                
                </div>
                <span>3 ratings</span>
                    </div>
                
            </div>

<br/>
<div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <h4 style={{fontWeight:'550'}}>Reviews</h4>
         
                {reviews.map((data,i)=>
                <>
                   <div className="d-flex mt-5">
                      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <img style={{width:'100%'}} src={data.image} alt="reviewers"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-2">

                        <h5>{data.name}</h5>
                        <p style={{fontWeight:'550'}}>{data.title}</p>
                        <p style={{color:'#54595F',lineHeight:"1.65"}} className="m-0">{data.explanation}</p>

                        </div>

                      <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                        <StarRating review={true} ratingVal={data.ratingVal}/>
                      </div>
                      </div>
                      <Divider/>
                      </>
                )}
                </div>
                
        </>
    )
}