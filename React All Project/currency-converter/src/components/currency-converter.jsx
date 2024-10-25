import React, { useEffect } from 'react'
import  { useState } from 'react'
import CurrencyDropdown from './currency-dropdown';


 const CurrencyConverter = () => {
             {/*State Variable*/} 

    const [currencies,setCurrencies] = useState([]);
    const [amount, setamount] = useState(1);

    // function to fetch curriences from API
    const fetchCurrencies = async()=>{
        try {
            // step - 2  fetch and convert the data according to js
            const result = await fetch("https://api.frankfurter.app/currencies");
            const data = await result.json();
            // update the data
            setCurrencies(Object.keys(data));
        } catch (error) {
            console.error("Error Featching", error);
        }
    }


    // call the fetch currency method to check the API working method work or not
    useEffect(()=>{
        fetchCurrencies();
    },[]);

    // check the curriencies listed or not
    console.log(currencies);

    // convert the currencie
    const convertCurrency = async ()=>{

    }


  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md '>
                    {/*title of application*/} 
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Converter</h2>
            {/*List of country from API*/}
        <div>
            <CurrencyDropdown title="From:" currencies={currencies}/>
            <CurrencyDropdown title="To:" currencies={currencies}/>
        </div>
            {/*Amount input Field*/}
        <div>
            <label htmlFor="amount"
            className='block text-sm font-medium text-gray-700'
            >Amount</label>
            <input type="number" 
            className='w-full p-2 border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 mt-1 focus:ring-2'
            value={amount} onChange={(e)=>setamount(e.target.value)}/>
        </div>

        {/*Convert Button*/}
        <div className='flex justify-end mt-6'>
            <button 
            className='px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 font-semibold'
            onClick={convertCurrency}
            >
             Convert</button>
        </div>

        {/*Display converted amount*/}
        <div className='mt-5 text-lg font-medium text-right text-gray-600'>
            Converted Amount : 69 USD
        </div>
    </div>
  )
}

export default CurrencyConverter