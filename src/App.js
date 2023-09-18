import './App.css';
import { useState } from 'react';
import {RiDeleteBin5Line} from 'react-icons/ri'
function App() {
  const [newItem,setNewItem]=useState('')
  const [items,setItems]=useState([])
  const addItem=()=>{
    if(!newItem){
     alert('add an item')
     return;
    }
   const item=
    {
      id:Math.floor(Math.random()*1000),
      value:newItem
    }
   setItems(oldItems=>[...oldItems,item])
   setNewItem("")
  }
  const deleteItem=(id)=>{
    const newArray=items.filter(item=>id!==item.id)
    setItems(newArray)
  }
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div className="input-btn">
      <input type="text" placeholder='Add an Item' value={newItem} onChange={(e=>{setNewItem(e.target.value)})} onKeyUp={(e)=>{e.keyCode==13 ? addItem(): <div></div>}} />
      <button onClick={()=>addItem()}>Add</button>
      </div>
      <ul>
        {items.map(item=>{
          return(
        <li key={item.id}>{item.value} 
        <button className='delete' onClick={()=>deleteItem(item.id)}><RiDeleteBin5Line/></button>
        </li>
          )
        })}
      </ul>
    </div>
  )
  }
export default App;
