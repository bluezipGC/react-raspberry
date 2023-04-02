import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';

fetch('https://api.weather.gov/points/39.7456,-97.0892')
.then(response => response.json())
.then(data => {
  console.log(data);
  })
  .catch(error => {
    console.error(error);
  })


// Component for the list of items
function List(props) {
  return (
    <ul style={{display: props.show ? 'block' : 'none'}}>
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

// dropdown menu
function ListSelector(props) {
  const [selectedList, setSelectedList] = useState(props.lists[0].name);

  // Function to handle when a list is selected from the dropdown
  function handleListSelect(event) {
    setSelectedList(event.target.value);
  }

  return (
    <div>
      <select onChange={handleListSelect}>
        {props.lists.map((list, index) => <option key={index} value={list.name}>{list.label}</option>)}
      </select>
      {props.lists.map((list, index) => (
        <List key={index} show={selectedList === list.name} items={list.items} />
      ))}
    </div>
    
  );
}

// ListSelector component
function App() {
  const lists = [
    {name: 'list1', label: 'List 1', items: ['Apple', 'Banana', 'Orange']},
    {name: 'list2', label: 'List 2', items: ['Potato', 'Aspargus', 'Celery']},
  ];

  return (
    <div>
      <h1>List of Fruits or Vegetables</h1>
      <ListSelector lists={lists} />
    </div>
  );
}
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ok, here is a fruit or vegetable rank list.
        </p>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am objectively right, here is the reason.
        </a>
      </header>
    </div>*/
export default App;
