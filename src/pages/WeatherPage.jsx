import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { KEY,BASE } from "../App";

const api = { KEY,BASE }


const Weather = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState();

    const searchPressed = () =>{
        console.log("Search pressed");
        fetch(`${api.BASE}weather?q=${search}&units=metric&APPID=${api.KEY}`)
        .then((res) => res.json())
        .then((result) => {
            setWeather(result);
        })
    }

    return (
        <div>
            <header>
                <h1>CHECK YOUR WEATHER</h1>

                {/* Search Box */}
                <div>
                <input type="text" 
                    placeholder='Enter City/Town...' 
                    onChange={(e)=>setSearch(e.target.value)}
                />

                <button onClick={searchPressed} >Search</button>
    
                </div>
                
                {typeof weather.main != "undefined" ?(
                    <div>
                    {/* Location */}
                    <p>{Weather.name}</p>

                    {/* Temperature  f/c */}
                    <p>{weather.main.temp}</p>


                    {/* Condition {Sunny} */}
                
                        <p>{weather[0].main}</p>
                        <p>( {weather[0].description})</p>  
                    </div> 
                ):(
                    ""
                )}
               
            </header>
        </div>

    )
};

export default Weather
