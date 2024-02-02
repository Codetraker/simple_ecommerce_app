import React from 'react';
import './OutputBox.css';

function OutputBox(props){
    return(
        <div className='outBox'>{props.children}</div>
    );
}

export default OutputBox;