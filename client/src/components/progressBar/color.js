import React from 'react';
import './color.css';

const Color = (props) => {

    let hidden = props.state;
    if(hidden){
        hidden="hidden";
    }

    return ( 
        <React.Fragment>
            <div className="color" style={{ width: `${props.percentage*10}%` , visibility:hidden }}></div>  
        </React.Fragment>
     );
}
 
export default Color;