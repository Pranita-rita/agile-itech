import * as React from 'react';
import "./StarRating.scss";
import * as imports from "../../utils/Imports";


export default function TextRating(props) {
  const value = props.ratingVal;
  // console.log(value)
  return (
    <imports.Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        mt:2
      }}
    >
      <imports.Rating
        name="text-feedback"
        value={value}
        readOnlys
        size="small"
        className={"rating"} 
        precision={0.5}
        emptyIcon={<imports.StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {props.review
      ?
      <></>
      :
      <imports.Box  className={"ratingValue"} color="text.secondary">
          ({value})
        </imports.Box>
    }
      
    </imports.Box>
  );
}