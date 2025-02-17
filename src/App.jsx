import { useState } from 'react';
import './App.css';
import StockCard from './StockContainer'; 
import Nav from './Nav';
import Footer from './Footer';

function App() {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSymbols, setSelectedSymbols] = useState([]);

    const allSymbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "FB", "NFLX"];


    const addStock = async (symbol) => {
        if (selectedSymbols.includes(symbol)) return; 

        setSelectedSymbols([...selectedSymbols, symbol]); 
        setLoading(true);

        try {
            const apiKey = "#"; 
            const response = await fetch(
                `https://api.twelvedata.com/time_series?apikey=${apiKey}&interval=1day&symbol=${symbol}&outputsize=1`
            );
            const result = await response.json();

            if (result.values) {
                const newStock = {
                    symbol,
                    price: parseFloat(result.values[0].close),
                    date: result.values[0].datetime
                };

             
                setStocks((prevStocks) => [...prevStocks, newStock]);
            }
        } catch (error) {
            console.error("Error fetching stock data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
      <div className='flex flex-col bg-slate-950 items-center cursor-default'>
        <Nav />
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
          {loading && stocks.length === 0 ? (
            <p className="text-center text-white text-xl">Loading stocks...</p>
          ) : stocks.length > 0 ? (
            stocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))
          ) : (
            <p className="absolute justify-self-center text-white text-4xl">No stocks added</p>
          )}
        </div>

       
        <h2 className='text-white text-5xl py-8 pt-40'>Choose a stock to track</h2>
        <div className='w-full flex justify-center items-center flex-wrap gap-4'>
          {allSymbols.map((symbol) => (
            <button 
              key={symbol} 
              onClick={() => addStock(symbol)}
              className={`bg-white text-slate-950 px-4 py-2 rounded-lg m-2 cursor-pointer hover:bg-green-300 duration-300 ${
                selectedSymbols.includes(symbol) ? 'bg-green-400' : ''
              }`}
            >
              {symbol}
            </button>
          ))}
        </div>
        
        <div className='pt-14'>
          <Footer />
        </div>
      </div>
    );
}

export default App;
