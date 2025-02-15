import { useState } from 'react';
import './App.css';
import StockCard from './StockContainer'; // Ensure this is correctly exported in StockContainer.js
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className='flex flex-col bg-linear-to-t from-slate-200 to-sky-300 items-center cursor-default'>
      <Nav/>
    <div className=' grid grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-8'>
      <StockCard />
      
    </div>
    <div className='pt-14'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
