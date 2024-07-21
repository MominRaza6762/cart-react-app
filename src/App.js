import { NavBar } from "./components/NavBar";
import { ProductList } from "./components/ProductList";
import { Footer } from "./components/Footer";
import { AddItem } from "./components/AddItem";
import { useState } from "react";


function App() {
  const product =[
    {
      price : 9999,
      name : "iPhone",
      quantity : 0
    },
    {
      price : 8888,
      name : "Samsung",
      quantity : 0
    }
  ]
  const [objProduct , setObjProduct] = useState(product)
  const [totalAmount , setTotalAmount] = useState(0)  
  let fnIncQua = (index) =>
  {
    let newProduct = [...objProduct]

    let newAmount= totalAmount;
    newProduct[index].quantity++;
    setObjProduct(newProduct);
    newAmount += newProduct[index].price;
    setTotalAmount(newAmount);
    
  }

  let fnDecQua = (index) =>
  {
    let newProduct = [...objProduct]
    let newAmount= totalAmount;
    if (newProduct[index].quantity>0) {
      newProduct[index].quantity--;
      setObjProduct(newProduct);
      newAmount -= newProduct[index].price;
      setTotalAmount(newAmount);
      
    }    
  }
  let reset = () =>
  {
    let newProduct = [...objProduct]
    newProduct.map((e)=>{
      e.quantity=0;
    })
    setObjProduct(newProduct);
    setTotalAmount(0);
  }
   const fnRemItem = (index) =>
   {
    let newProduct = [...objProduct]  
    let newAmount= totalAmount;
    newAmount -= newProduct[index].quantity*newProduct[index].price
    newProduct.splice(index)
    setObjProduct(newProduct)
    setTotalAmount(newAmount)
}

const fnAddItems = (name ,price) =>
{
  let newProduct = [...objProduct]  
  newProduct.push({
    price : price,
      name : name,
      quantity : 0

  })
  setObjProduct(newProduct);
}
 
  return (
    <>
   <NavBar/>
   <AddItem addItem ={fnAddItems}/>
   <ProductList products ={objProduct} incQua = {fnIncQua}  decQua = {fnDecQua} remItem ={fnRemItem} />
   <Footer toAmo={totalAmount} reset={reset}/>
   </>
  );
}

export default App;
