import * as React from 'react';
import * as imports from "../../utils/Imports";
import Overview from "./Overview/Overview";
import Instructor from './Instructor/Instructor';
import Reviews from './Reviews/Reviews';
import Faq from './Faq/Faq';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
    
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <imports.Box sx={{ pt:3 }}>
          <imports.Typography >{children}</imports.Typography>
        </imports.Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tabs(props) {
   
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <imports.Box sx={{ width: '100%'}} className={'mt-5 pl-0'}>
      <imports.Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:"#f8f9f8" }}>
        <imports.Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {(props.tab_data).map((data,i)=>
          <imports.Tab label={data} {...a11yProps(i)} style={{color:'black', fontWeight:'550'}}/>
          )}
          {/* <imports.Tab label="Item Two" {...a11yProps(1)} />
          <imports.Tab label="Item Three" {...a11yProps(2)} /> */}
        </imports.Tabs>
      </imports.Box>

      <TabPanel value={value} index={0}>
         <Overview/>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Instructor/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Reviews/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Faq/>
      </TabPanel>
    </imports.Box>
  );
}