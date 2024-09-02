import React, { useState } from 'react';

const api = { 
    KEY: '5a325fae19aa4d85b7f6c25eac927bb1',
    BASE: 'https://api.openweathermap.org/data/2.5/'
};

const Weather = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const searchPressed = (e) => {
        e.preventDefault();
        fetch(`${api.BASE}weather?q=${search}&units=metric&APPID=${api.KEY}`)
        .then((res) => res.json())
        .then((result) => {
            setWeather(result);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            setWeather(null); // Reset weather on error
        });
    }

    return (
        <div className="flex justify-center">
            <header>
                <h1 className="mt-3 font-bold text-2xl mb-4 block text-center">CHECK YOUR WEATHER</h1>
                <form onSubmit={searchPressed}>
                    <div className="mx-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6 text-center">
                        {/* Search Box */}
                        <div>
                            <input 
                                type="text" 
                                placeholder='Enter City/Town...' 
                                onChange={(e) => setSearch(e.target.value)}
                                className="border-2 border-gray-300 rounded-lg p-2 text-lg"
                            />
                            <button 
                                type="submit"
                                className="ml-2 mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer"
                            >
                                Search
                            </button>
                        </div>
                        
                        <div className='py-4'>
                            {/* Location */}
                            <p className='py-1'>Location: {weather?.name || 'N/A'}</p>
                            {/* Temperature */}
                            <p className='py-1'>Temperature: {weather?.main?.temp ? `${weather.main.temp} °C` : 'N/A'}</p>
                            {/* Condition */}
                            <p className='py-1'>Condition: {weather?.weather?.[0]?.description || 'N/A'}</p>
                            {/* Clouds */}
                            <p className='py-1'>Clouds: {weather?.clouds?.all ? `${weather.clouds.all}%` : 'N/A'}</p>
                        </div>   
                    </div>
                </form>
            </header>
        </div>
    );
};

export default Weather;
