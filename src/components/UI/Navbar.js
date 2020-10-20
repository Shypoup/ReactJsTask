import React from 'react';
import
    {
      AppBar ,
      Toolbar ,
      Grid ,
      makeStyles ,
      }
 from '@material-ui/core';

import LanguageButtons from '../UI/LanguageButtos';
import Sidebar from './Sidebar';
import '../css/navbar.css';
import colors from '../colors';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  language: {
    flexGrow: 2,
  },
  user:{
      textAlign:'right'
  },
  logo:{
      textAlign:'center'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    
      
      <AppBar  color="#000">
        <Toolbar>
       <Grid container >  

          {/* Button Languages */}
          
        <Grid item xs={5}>
          <LanguageButtons />
        </Grid>
                
           

          {/* Logo */}
        <Grid item xs={3} >
           <img src={"./logo.jpg"} alt="Logo" className="logo" />
        </Grid>
           
           {/* Sidebar */}
        <Grid item xs={4}  className={classes.user}>
            <Sidebar />
        </Grid>
              


          
            
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
