import React from 'react';
import
 {
    Drawer,
    List,
    Divider,
    IconButton ,
    ListItem , 
    ListItemIcon ,
    ListItemText ,
    makeStyles 
  } from '@material-ui/core';
import
 {
   AccountCircle ,
    People ,
     DateRange ,
      ExitToApp
 } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    
    >
      <List>
        
           <ListItem  >
            <ListItemIcon> <AccountCircle color="primary"/> </ListItemIcon>
            <ListItemText primary="addmition male" />
          </ListItem>

          <Divider />

         <ListItem button >
            <ListItemIcon><People color="primary" /> </ListItemIcon>
            <ListItemText primary="Applicant" />
          </ListItem>

          <ListItem button >
            <ListItemIcon><DateRange color="primary"/></ListItemIcon>
            <ListItemText primary="Dates" />
          </ListItem>

          <ListItem button >
            <ListItemIcon><ExitToApp color="primary"/></ListItemIcon>
            <ListItemText primary="Signout" />
          </ListItem>
        
      </List>
    </div>
  );

  return (
    <div>
     
      
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer('right', true)}
                color="inherit"
              >
                <AccountCircle color="primary"/>
              </IconButton>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        
     
    </div>
  );
}
