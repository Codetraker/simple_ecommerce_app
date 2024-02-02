import React,{useState} from 'react';
import './App.css';
import Header from './UI/Header';
import AddProd from './component/AddProd';
import OutputList from './component/OutputList';

function App() {
    const [products, setProducts] = useState([]);

    const addProdHandler = (prodId,price,prodName)=>{
      setProducts((prev)=>{
        return [...prev,{id:prodId,price:price,name:prodName}];
      });
    }
  return (
    <div>
      <Header>Inventory Record</Header>
      <AddProd onAddProd={addProdHandler} />
      <Header>Products</Header>
      <OutputList data={products} />
    </div>
  );
}

export default App;
