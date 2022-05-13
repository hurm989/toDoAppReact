import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import todolist from './todolist';

function App() {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])
  let listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, text]
    })
    setText('')
  }
  let deleteItems = (ind) => {
    const updatedItem = items.filter((elem, id) => {
      return ind != id;
    })
    setItems(updatedItem)
  }
  let remv = () => {
    setItems([])
  }
  let updte = (ind) => {
    let editedTaskList = items.map((ele, indx) => {
      if (indx == ind) {
        items[indx] = prompt()

      }
    })
    setItems([...items])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>To Do List</h3>
        <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" placeholder='Add an item' />
        <button onClick={listOfItems}>Add</button>
        <ol>

          {items.map((itemval, ind) => {
            return (<div key={ind}> <button onClick={() => deleteItems(ind)}>Delete</button>
              <li>{itemval} <button onClick={() => updte(ind)}>Edit</button></li></div>)
          }
          )}
        </ol>
        <button onClick={remv}>Remove All</button>
      </header>
    </div>
  );
}

export default App;
