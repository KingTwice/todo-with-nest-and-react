import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import { Button } from 'antd';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
