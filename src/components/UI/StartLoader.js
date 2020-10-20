import React from 'react';
import Loader from 'react-loader-spinner';



 const StartLoader = () => {
    
    return (
        <div style={{textAlign:'center' , justifyContent:'center'}}>
            <Loader type="BallTriangle" color="#00BFFF" height={400} width={400} />
        </div>
    )
}

export default StartLoader;