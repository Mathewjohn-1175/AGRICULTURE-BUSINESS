import { useState, useEffect } from 'react';
import * as React from 'react';
import SellIcon from '@mui/icons-material/Sell';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Display from './display';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [flag, setFlag] = useState(false);
  const [itemList, setItemList] = useState([]);
  const navigate = useNavigate(); 

  const handleSell = () => {
    navigate("/sell");
  }

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  }

  const handleChange = (event, value) => {
    setSearch(value ? value.label : '');
    const filteredItems = itemList.filter(item => item.hasOwnProperty(value.label.toUpperCase()));
    setItemList(filteredItems);
    setFlag(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/data');
        setItemList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const products = [
    "FERTILIZERS",
    "PRODUCTS",
    "MACHINERY"
  ].map((label) => ({ label }));

  return (
    <>
      <div className='h-[10rem]'></div>
      <div className="flex justify-between items-center">
        <button onClick={handleSell} className='w-[10rem] ml-10 rounded-3xl text-4xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          <div>
            <SellIcon style={{ fontSize: '5rem' }} />
          </div>
          SELL
        </button>
        <div className='inline-block mx-[20rem] mt-6'>
          <Autocomplete
            disablePortal
            id="search"
            options={products}
            onChange={handleChange}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="SEARCH" />}
          />
        </div>
        <button onClick={handleLogout} className='mr-10 rounded-3xl text-4xl bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
          Logout
        </button>
      </div>

      <div className="mt-6">
        {
          flag && <Display items={itemList} search={search} />
        }
      </div>
    </>
  );
};

export default Dashboard;
