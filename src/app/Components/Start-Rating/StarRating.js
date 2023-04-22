import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import "./StarRating.scss"


export default function TextRating(props) {
  const value = props.ratingVal;
  console.log(value)
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        mt:2
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnlys
        size="small"
        className={"rating"} 
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box  className={"ratingValue"} color="text.secondary">({props.ratingVal})</Box>
    </Box>
  );
}