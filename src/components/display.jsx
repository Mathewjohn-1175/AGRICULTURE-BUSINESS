import React, { useState } from 'react';
import axios from 'axios'


const Display = (props) => {
  const { items, search } = props;
  const [quantities, setQuantities] = useState({}); // State to hold quantities for each item
  const handleCart=async()=> {
    // http://127.0.0.1:5000/lol
    const response = await axios.post('http://127.0.0.1:5000/lol', {'quantity': quantities});
    console.log(response);
  }
  

  // Function to handle quantity change
  const handleQuantityChange = (name, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [name]: value
    }));
  };

  // Function to handle incrementing quantity
  const handleIncrement = (name) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [name]: (prevQuantities[name] || 0) + 1
    }));
  };

  // Function to handle decrementing quantity
  const handleDecrement = (name) => {
    if (quantities[name] > 0) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [name]: (prevQuantities[name] || 0) - 1
      }));
    }
  };

  const filteredItems = items.filter(item => {
    return Object.keys(item).some(key => key === search);
  });

  return (
    <div className='flex flex-wrap'>
      {filteredItems.map((item, index) => (
        <div key={index} className='inline-block m-[5rem] flex-shrink-0'>
          {Object.entries(item).map(([category, [name, value]]) => (
            <div key={name} className="border p-4 m-2 flex flex-col items-center">
              <p className="text-center">Category: {category}</p>
              <p className="text-center">Name: {name}</p>
              <p className="text-center">Value: {value}</p>
              <div className="flex justify-center items-center mt-4">
              <button onClick={() => handleDecrement(name)} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                  -
                </button>
                <input
                  type="number"
                  value={quantities[name] || 0}
                  onChange={(e) => handleQuantityChange(name, parseInt(e.target.value))}
                  className="mr-2 w-16 text-center"
                />
                <button onClick={() => handleIncrement(name)} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  +
                </button>
               
              </div>
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCart}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Display;
