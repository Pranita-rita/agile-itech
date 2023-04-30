import * as React from 'react';
import * as imports from "../../utils/Imports";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import "./Accordions.scss";

const accordion_data=[
  {
    question:'Can I Just Enroll In A Single Course?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'How Much Do I Have To Pay For Unreal Engine 4?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'What Background Knowledge Is Necessary?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'How Much Do I Have To Pay For Unreal Engine 4?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'What Background Knowledge Is Necessary?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'Do I Need To Take The Courses In A Specific Order?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'How Much Do I Have To Pay For Unreal Engine 4?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'Do I Need To Take The Courses In A Specific Order?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    question:'What Is The Refund Policy?',
    ans:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
]



const Accordion = imports.styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
   
    
  },

  '&:before': {
    display: 'none',
    
  },
}));

const AccordionSummary = imports.styled((props) => (
  
  <MuiAccordionSummary
    expandIcon={<imports.ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:'white',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    marginLeft:theme.spacing(1),
    
  },
  border: "1px solid #E6E6E6",

  
 '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    
  },
  
}));

const AccordionDetails = imports.styled(imports.MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      
      {accordion_data.map((e,i)=>
      <imports.Accordion className="accordion mb-3" expanded={expanded === 'panel'+String(i)} onChange={handleChange('panel'+String(i))}>
        <AccordionSummary 
          
        // aria-controls={`panel${String(i)}d-content`} id={`panel${String(i)}d-header`}
        >
          <imports.Typography className={expanded === 'panel'+String(i)?'ml-2':''}>{e.question}</imports.Typography>
        </AccordionSummary>
        <AccordionDetails>
          <imports.Typography style={{fontSize:'0.88rem', color:'grey', marginLeft:'4%'}}>
           {e.ans}
          </imports.Typography>
        </AccordionDetails>
      </imports.Accordion>
)}

    
      
    </div>
  );
}