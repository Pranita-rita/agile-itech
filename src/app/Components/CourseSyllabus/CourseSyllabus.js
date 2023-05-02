import React from "react";
import Accordions from "../Accordions/Accordions";
import * as imports from "../../utils/Imports";
import Divider from "../Divider/Divider";

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
]   },

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
        
{
    module:'Module 4',
    title:'Data Source',
    ulist:[
       {
        key:'JSON',
       subList:['Generate JSON structured dynamically',
       'Retrieve information from complex JSON structure']
    },
 {
    key:'MYSQL',
   subList:['Intro to SQL',
   'What is normalization & its types?',
   'Basic queries (create, insert, update, delete)',
   'SQL joins (1NF, 2NF, 3NF, BCNF)',
   'SQL built-in methods, having, group by, distinct'
]
}

]},

{
    module:'Module 5',
    title:'Selenium',
    ulist:["Selenium with python",
    "What is Selenium?",
"Why Selenium & Advantages?",
"What are its versions?",
"What OS, Browsers, and Programming Languages does it Support?",
"What is a web driver & its architecture?",
"Python IDE(IntelliJ)",
"Anaconda Installation",
"Virtual environments and its significance",
"Python installation and virtual environment setup",
"Web Browser developer tools(F12) and its significance",

]},
{
    module:'Module 6',
    title:'Selenium Architecture',
    ulist:[
        {
        key:'Getting Started with DOM',
        ulist:[
            'Simple Usage',
            'Example Explained',
            'Using Selenium to write tests',
            'Walkthrough of the example'
        ]
        },
        {
        key:'Navigating',
        ulist:[
            'Interacting with the page',
            'Filling in forms',
            'Drag and drop',
            'Moving between windows and frames',
            'Popup dialogs',
            'Navingation: history and location'
        ]
        },
        {
            key:'Headless browser'
        },

        ]
},
{
    module:'Module 7',
    title:'Locating Elements',
    ulist:["Locating by Id, Name,Path",
    "Locating Elements by CSS Selectors",
"Xpath and Xpath access",

]},
{
    module:'Module 8',
    title:'WebDriver API',
    ulist:["Exceptions",
    "Action Chains",
"Alerts",
"Desired Capabilities",
"Proxy and Utilities",
"Service",
"Application Cache",
"Firefox WebDriver",
"Chrome WebDriver",
"Wait Support",
"Expected conditions Support",

]},

{
    module:'Module 9',
    title:'Automation Framework',
    ulist:["Automation Framework Architecture",
    "What is an Architecture",
"What is a Framework",
"POM (Page Object Model)",
"Data driven framework",
"Keyword Driven framework",

]},
{
    module:'Module 10',
    title:'Git & Jenkins',
    ulist:["Git & GitHub",
    "Jenkins Setup for Automation",

]},
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
        <div className="row">
        {Syllabus.map((e,i)=>
        <>
        <div className="pl-4 pt-3 col-6">
        <imports.Accordion className="accordion pl-2 pr-2 pt-1" style={{border:'none',boxShadow:'none',margin:'0px',backgroundColor:'white', padding:'2%',borderColor:'#F4F5F6', }} 
      expanded={expanded === 'panel'+String(i)} onChange={handleChange('panel'+String(i))}>
        <imports.AccordionSummary
          expandIcon={expanded==='panel'+String(i)?<i class="fa fa-minus-circle" aria-hidden="true" style={{color:"#007CBAF8"}}></i>:<i class="fa fa-plus-circle" aria-hidden="true" style={{color:"#000"}}></i>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
          <imports.Typography >
           <div className={expanded === 'panel'+String(i)?'expanded_accordion_heading':'default_accordion_heading'} style={{fontWeight:'bold'}}>{e.module}</div>
            </imports.Typography>
        </imports.AccordionSummary>
        <imports.AccordionDetails>
          <imports.Typography className="accordion_paratext" style={{textAlign:'left'}}>
           <Divider marginLess={true}/>
         <span style={{fontWeight:'bold'}}>{e.title}</span> 
         
           
         <span>j</span>
        
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