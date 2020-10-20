import React from 'react';
import {Button , makeStyles} from '@material-ui/core';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
   container: {
       marginTop:'5px'
   },
    Button :
    {     
        marginLeft:"5px"
    
    },
    text:{
        marginTop:0,
        marginBottom:'3px',
        marginLeft:'3px'
    }
}));

const LanguageButton =() =>{
    const classes = useStyles();
    const { i18n } = useTranslation();
    
    function handleClick(language){
        i18n.changeLanguage(language)
    }
    
    return (
        <div className={classes.container}>
            <Button variant="outlined" size="small" className={classes.Button}  onClick={() => handleClick('en')}>EN</Button>
            <Button variant="outlined" size="small" color="primary" className={classes.Button} onClick={() => handleClick('ar')}>AR</Button>
            <p className={classes.text}>contactus@mcst.sa</p>
            
       </div>
    )
}





export default LanguageButton;
