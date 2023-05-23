import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeder from './components/app-header';
import SearchPAnel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <div>
      <AppHeder />
      <SearchPAnel />
      <TodoList />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)


