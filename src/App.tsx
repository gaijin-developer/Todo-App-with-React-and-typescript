import React from 'react';
import Todo from './models/todo';

import './App.css';
import Todos from './components/Todos';

function App() {

const todos=[
  new Todo("Learn react"),new Todo("sing a song")
]

  return (
    <div className="App">
     
     <Todos items={todos}/>
    </div>
  );
}

export default App;
