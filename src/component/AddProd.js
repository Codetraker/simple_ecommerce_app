import React,{useState} from 'react';
import Card from "../UI/Card";
import './AddProd.css';
import Button from '../UI/Button';
import OutputList from './OutputList';

function AddProd(props){
    const [prodId, setProdId] = useState('');
    const [price, setPrice] = useState('');
    const [prodName, setProdName] = useState('');

    const addProdHandler = (event) =>{
        event.preventDefault();
        props.onAddProd(prodId,price,prodName);
        setProdId('');
        setPrice('');
        setProdName('');
    };

    const prodIdChangeHandler = (event) =>{
        setProdId(event.target.value);
    };
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    };
    const prodNameChangeHandler = (event) =>{
        setProdName(event.target.value);
    };
    
    return(
        <Card className='input'>
            <form onSubmit={addProdHandler}>
                <label htmlFor='pid'>Product ID:</label>
                <input type='number' id='pid' value={prodId} onChange={prodIdChangeHandler}/>
                <label htmlFor='price'>Selling Price:</label>
                <input type='number' id='price' value={price} onChange={priceChangeHandler}/>
                <label htmlFor='pname'>Product Name:</label>
                <input type='text' id='pname' value={prodName} onChange={prodNameChangeHandler}/>
                <Button btype="add" type="submit">Add Product</Button>
            </form>
        </Card>
    );
}

export default AddProd;