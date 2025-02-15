import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function StockContainer() {
  const [heartChange, setHeartChange] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleHeart = () => {
    setHeartChange(!heartChange);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch(
            "https://api.twelvedata.com/time_series?apikey=439e836edb5e4cd8a9536e73b4868c07&interval=1day&symbol=AAPL&outputsize=1"
          );
          const result = await response.json();
          
          
          if (result && result.values) {
            setData(result.values.reverse());
          } else {
            setData([]);
          }

          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-500 h-120 w-100 flex items-center justify-center rounded-2xl">
      <div className="h-100 w-80 bg-slate-600 flex flex-col rounded-xl">
        <div className="border flex justify-start h-full rounded-t-xl p-4">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="datetime" tick={{ fill: 'white '}}/>
                <YAxis tick={{ fill: 'white '}}/>
                <Tooltip />
                <Line type="monotone" dataKey="close" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
              </ResponsiveContainer>
          )}
        </div>
        <div className="h-30 w-full bg-slate-700 flex justify-around items-center rounded-b-xl">
          <p className="flex text-3xl items-center text-white">Stock Info</p>
          <div className="cursor-pointer flex flex-row-reverse gap-2">
            <IoMdClose className="size-10 text-white" />
            <div onClick={toggleHeart} className="relative">
              <FaHeart className="size-7 top-[6px] right-[6px] absolute opacity-0 hover:opacity-40 duration-300 text-red-600 z-1" />
              <CiHeart className="size-10 text-white" />
              <div
                style={{
                  opacity: heartChange ? "1" : "0",
                  animation: heartChange ? "beating 1s ease-in-out 1" : "none",
                }}
                className="duration-200 absolute top-1 right-1 text-red-600 cursor-pointer"
              >
                <FaHeart className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockContainer;
