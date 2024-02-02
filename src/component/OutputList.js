import React from 'react';
import OutputBox from '../UI/OutputBox';
import './OutputList.css';
import Button from '../UI/Button';

function OutputList(props) {
    return(
        <OutputBox>
            <ul>
                {props.data.map((i)=>(
                    <li key={i.id}>
                        <strong>ID-</strong>{i.id} - <strong>Price-</strong>Rs.{i.price}.00 - <strong>Item_Name-</strong>{i.name}
                        <Button btype="delete" type="delete">Delete</Button>
                    </li>
                ))}
            </ul>
        </OutputBox>
    );
}

export default OutputList;