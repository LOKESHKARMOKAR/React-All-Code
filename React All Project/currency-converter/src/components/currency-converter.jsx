import React, { useEffect } from 'react'
import  { useState } from 'react'
import CurrencyDropdown from './currency-dropdown';
import { IoMdSwap } from "react-icons/io";


 const CurrencyConverter = () => {
             {/*State Variable*/} 

    const [currencies,setCurrencies] = useState([]);
    const [amount, setamount] = useState(1);
    const [fromCurrency,setFromCurrency] = useState("USD");
    const [toCurrency,setTOCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [convertionMoment, setConvertionMoment] = useState(false);
    

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
    //console.log(currencies);

    // convert the currencie
    const convertCurrency = async ()=>{
        // if amount is not present then no convertion 
        if(!amount) return;
        // else first change the convertion moment to true
        // and start the convertion process
        setConvertionMoment(true);
        // Actual Convertion is start
        try {
            const result = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await result.json();
            // convert the data
            setConvertedAmount(data.rates[toCurrency] + " " + toCurrency)
            
        } catch (error) {
            console.error("Error fetching", error);
        }
        finally{
            setConvertionMoment(false);
        }
    }

    // final to swap  currencies 
    const swapCurrencies = ()=>{
        setFromCurrency(toCurrency);
        setTOCurrency(fromCurrency);
    };


  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md '>
                    {/*title of application*/} 
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Converter</h2>
            {/*List of country from API*/}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-end'>
            <CurrencyDropdown title="From:" currencies={currencies} currency={fromCurrency} setCurrency={setFromCurrency}/>

            {/* SWAP Currency Button */}

            <div className='flex justify-center -mb-5 sm:mb-0'>
                <button
                    onClick={swapCurrencies}
                    className='p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'
                >
                    {/* swap icon */}
                    <IoMdSwap className='text-xl text-gray-700'/>
                </button>
            </div>

            <CurrencyDropdown title="To:" currencies={currencies} currency={toCurrency} setCurrency={setTOCurrency}/>
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
            className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 font-semibold
                ${convertionMoment ? "animate-ping" : ""}
            `}
            onClick={convertCurrency}
            >
             Convert</button>
        </div>

        {/*Display converted amount*/}
        {convertedAmount && (
            <div className='mt-5 text-lg font-medium text-right text-gray-600'>
            Converted Amount : {convertedAmount}
        </div>
        )}
        
    </div>
  )
}

export default CurrencyConverter

