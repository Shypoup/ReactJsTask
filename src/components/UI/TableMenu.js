import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import 
{
     makeStyles,
    AppBar ,
    Tabs ,
    Tab  ,
    Box 
  } from '@material-ui/core';

import ListStudents from '../ListStudents';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
 

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{height:'500px'}}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function chnageTab(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'70px',
    height: '500px',

  },
  tabs: 
  { width: "auto",
   textAlign:'center' ,
    margin :'auto'}
}));

export default function TableMenu() {
  const classes = useStyles();
  const {t} = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <div className={classes.root} > 
      <AppBar position="static" color="transparent" >
      
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}

         
      >
        
          <Tab label={t('All')} {...chnageTab(0)}/>
         <Tab label={t("Under Review")} {...chnageTab(1)}/>
         <Tab label={t("Initial Acceptable")} {...chnageTab(2)}/>
         <Tab label={t("Conditional Acceptable")} {...chnageTab(3)}/>
         <Tab label={t("Rejected")} {...chnageTab(4)} />
 
        </Tabs>
      
    
        <TabPanel value={value} index={0} >
         
          <ListStudents />
        </TabPanel>
        <TabPanel value={value} index={1} >
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} >
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} >
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} >
          Item Five
        </TabPanel>
        </AppBar>
      
     
    </div>
  );
}

