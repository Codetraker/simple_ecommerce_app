import React from 'react';
import './Button.css';

function Button(props){
    return(
        <button className={`button ${props.btype}`} type={props.type || 'button'} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    );
}

export default Button;