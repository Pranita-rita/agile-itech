import React from "react";
import Accordions from "../Accordions/Accordions";
import * as imports from "../../utils/Imports";

const Syllabus=[
    {
        module:'Module 1',
        title:'Manual Testing',
        ulist:["Software Testing Introduction",
        "SDLC life cycle",
    "Software Testing Methodologies",
    "Test Case Design Techniques",
    "Levels of Testing",
    "Software Testing Life Cycle",
    "QA & QC & Testing",
    "Agile methodology"
]},

{
    module:'Module 2',
    title:'Python',
    ulist:["Introduction to Python",
    "Operators, Variables & Data Types",
"String manipulations",
"Conditions and Loops & Nested Loop",
"Array - Recursion",
"List, Tuple and Dictionary",
"Functions",
"File Handling - Debugging step in & step out",
"OOps concepts",
"Class & Objects",
"Lambda, Filter & Map",
"Python PIP package"
]},
{
    module:'Module 3',
    title:'Web Basics',
    ulist:[
        {
            key:'HTML',
            subList:['HTML elements, HTML tags',
        "HTML tag attributes",
        "HTML Forms (Input elements & attributes)"
    ]
        },
        {
            key:'CSS',
            subList:['What are CSS & ways to use?',
        "What is property & value?",
        "What is class & id?"
    ]
        },
        {
            key:'DOM',
            subList:['What is DOM & Understanding DOM?',
        "Access of HTML elements with DOM",
        
    ]
        }
    ]
        },
]

export default function CourseSyllabus(){

    const [expanded, setExpanded] = React.useState(false);

    const handleChange =
      (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <>
                <h2 style={{fontWeight:'bold'}} className="pt-5 pl-4">Course Syllabus</h2>
        <div >
        {Syllabus.map((e,i)=>
        <>
        <div className="pl-4 pt-3 col-md-6">
        <imports.Accordion className="accordion pl-2 pr-2 pt-1" style={{border:'none',boxShadow:'none',margin:'0px',backgroundColor:'#F4F5F6',borderColor:'#F4F5F6', }} 
      expanded={expanded === 'panel'+String(i)} onChange={handleChange('panel'+String(i))}>
        <imports.AccordionSummary
          expandIcon={expanded==='panel'+String(i)?<i class="fa fa-minus-circle" aria-hidden="true" style={{color:"#007CBAF8"}}></i>:<i class="fa fa-plus-circle" aria-hidden="true" style={{color:"#000"}}></i>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
          <imports.Typography >
           <div className={expanded === 'panel'+String(i)?'expanded_accordion_heading':'default_accordion_heading'}>{e.module}</div>
            </imports.Typography>
        </imports.AccordionSummary>
        <imports.AccordionDetails>
          <imports.Typography className="accordion_paratext" style={{textAlign:'left'}}>
          {e.title}
          </imports.Typography>
        </imports.AccordionDetails>
      </imports.Accordion>
        </div>
        </>
        )}
        </div>
        </>
    )
}