import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const products = [
  "FERTILIZERS",
  "PRODUCTS",
  "MACHINERY" //GET FROM BACKEND
].map((label) => ({ label }));

const Sell = () => {
  const [product, setProduct] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');


  const linkwaiting =async()=>{
    const response = await axios.post('http://127.0.0.1:5000/sell', {'quantity': quantity});
    console.log(response);

  }
  const handleSell = () => {
    // Create an object with the details
    const sellDetails = {
      product: product,
      name: name,
      quantity: quantity
    };
    // Log the details object to the console
    // console.log(sellDetails);
    linkwaiting()
    
    navigate("/dashboard");


  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Sell Your Product</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Left side */}
        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={products}
            sx={{ width: 500 }}
            value={product}
            onChange={(event, newValue) => {
              setProduct(newValue ? newValue.label : '');
            }}
            renderInput={(params) => <TextField {...params} label='Product To Sell' />}
          />
        </div>
        {/* Right side */}
        <div className='grid grid-cols-1 gap-6'>
          {/* Name of Product */}
          <div>
            <TextField 
              id='standard-basic' 
              label='NAME OF PRODUCT' 
              variant='standard' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          {/* Quantity */}
          <div>
            <TextField 
              id='standard-basic' 
              label='QUANTITY' 
              variant='standard' 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
            />
          </div>
          {/* Sell button */}
          <div>
            <button 
              className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleSell}
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
