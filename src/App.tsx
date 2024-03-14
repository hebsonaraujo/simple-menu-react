import React from 'react';
import Header from './components/Header/Header';
import Main from  './components/Main/Main'
import { items } from '../mockdata';
import './App.css'

const getTitles = () => items.map(el => el.title)
const App: React.FC = () => {
  return (
    <div className='global-main'>
      <div>
          <Header titles={getTitles()} />
      </div>
      <Main data={items}/>
    </div>
  );
};

export default App;
