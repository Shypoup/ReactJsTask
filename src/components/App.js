import React from 'react';

import Navbar from './UI/Navbar';
import TableMenu from './UI/TableMenu';

const App =() =>{
    return (
         <div className="container" >
        <div style={{marginBottom : '100px'}}>
       <Navbar />
       </div>

       <div >
        <TableMenu />
        
      
        </div>
       </div>
    
    ); 
}

export default App;
