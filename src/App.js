import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './UI/Header';
import AddProd from './component/AddProd';
import OutputList from './component/OutputList';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const storedProd = JSON.parse(localStorage.getItem('products'));
      if(storedProd){
        setProducts(storedProd);
      }
    }, [])
    

    const addProdHandler = (prodId,price,prodName)=>{
      const newProd = {id:prodId,price:price,name:prodName};
      setProducts((prev)=>{
        const updateProd = [...prev, newProd];
        localStorage.setItem('products', JSON.stringify(updateProd));
        return updateProd;
      });
    };
    const deleteItemHandler=(goalId)=>{
        setProducts((prev)=>{
          const updatedProd = prev.filter((item)=> item.id !== goalId);
          localStorage.setItem('products', JSON.stringify(updatedProd));
          return updatedProd;
        });
    };
    const calculateTotalAmount = () => {
      return products.reduce((total, product) => total + Number(product.price), 0);
  };
    

  return (
    <>
      <Header>Inventory Record</Header>
      <AddProd onAddProd={addProdHandler}  />
      <Header>Products</Header>
      {products.length>0 && <OutputList data={products} onDelete={deleteItemHandler} />}
      <Header>Total Amount: Rs.{calculateTotalAmount().toFixed(2)}</Header>
    </>
  );
}

export default App;
