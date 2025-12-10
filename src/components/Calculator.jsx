import React, { useState } from 'react'

const Calculator = () => {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    }

    const clearScreen  = () => {
        setResult("");
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex items-center justify-center">
        <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">

            {/* Screen */}
            <div className="screen p-2">
                <input type="text" 
                value={result}
                className="w-full bg-gray-100 text-black text-right text-2xl rounded-lg px-1 pt-10 outline-none text-right placeholder-black" placeholder='0' />
            </div>

            {/* Brand */}
            <div className="brand bg-gray-200 bg-opacity-90 mb-2">
                <h1 className="text-center text-black font-bold text-medium p-1 rounded-t-lg">MiM</h1>
            </div>

            {/* Keyboard */}
            <div className="keyboard">
                <div className="flex justify-between m-2">
                    <input type="button" onClick={clearScreen} value="C" className='bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="<" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="%" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="/" className='bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={handleClick} value="7" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="8" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="9" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick}  value="*" className='bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={handleClick} value="4" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="5" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="6" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="-" className='bg-violet-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={handleClick} value="1" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="2" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="3" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="+" className='bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={handleClick} value="0" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="00" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={handleClick} value="." className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                    <input type="button" onClick={calculate} value="=" className='bg-yellow-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator