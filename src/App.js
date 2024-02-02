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
    };
    const deleteItemHandler=(goalId)=>{
        setProducts((prev)=>{
          const updatedProd = prev.filter((item)=> item.id !== goalId);
          return updatedProd;
        });
    };

  return (
    <>
      <Header>Inventory Record</Header>
      <AddProd onAddProd={addProdHandler}  />
      <Header>Products</Header>
      {products.length>0 && <OutputList data={products} onDelete={deleteItemHandler} />}
    </>
  );
}

export default App;
