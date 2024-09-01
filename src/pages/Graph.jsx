import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { VITE_BACKEND_URL } from "../App";
import 'chart.js/auto'; // Import to automatically register chart components

const BarGraph = () => {
    const [graphData, setGraphData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${VITE_BACKEND_URL}/api/products`); 
                // Map data to the format expected by the graph
                const labels = response.data.map(product => product.name); // Product names as labels
                const data = response.data.map(product => product.quantity); // Product quantities as data

                // Generate random colors for each bar
                const colors = data.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);

                setGraphData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Quantity',
                            data: data,
                            backgroundColor: colors, // Set bar colors
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            tension: 0.1
                        }
                    ]
                });
            } catch (error) {
                console.log('Error fetching graph data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-screen flex justify-center"> {/* Full screen container */}
            <div className="mt-3 w-3/5 h-3/4 max-w-screen-l max-h-screen bg-white shadow-lg px-10 py-12 rounded">
                <h2 className="font-semibold text-2xl mb-2 mt-1 text-center">Goods Graph</h2>
                <Bar 
                    data={graphData}
                    options={{
                       responsive:true,
                        maintainAspectRatio: false,
                        catergory: 1,
                        bar: .5,
                        maxBarThickness: 200,
                        indexAxis: 'y',
                        scales: {
                            x: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Quantity'
                                }
                            },
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Product Name'
                                }
                            }
                        }
                    }}
                />
                 <a href="/home" className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 mt-5 font-bold hover:bg-gray-500 hover:cursor-pointer">BACK</a>
            </div>
        </div>
    );
};

export default BarGraph;
