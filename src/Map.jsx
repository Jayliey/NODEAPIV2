import { useEffect, useState } from "react";
import {useJsApiLoader} from '@react-google-maps/api';

const Map = () => {

    return(
        <>
        <form action="" onSubmit={updateProduct}>
            <div className="space-y-2">
                <label>Name:</label>
                <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name..."/>
            </div>
            <div className="space-y-2">
                <label>Quantity:</label>
                <input type="Number" value={product.quantity} onChange={(e) => setProduct({...product, quantity: e.target.value})}  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Quantity..."/>
            </div>
            <div className="space-y-2">
                <label>Price:</label>
                <input type="Number" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price..."/>
            </div>
            <div className="space-y-2">
                <label>Image URL:</label>
                <input type="text" value={product.image} onChange={(e) => setProduct({...product, image: e.target.value})} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL..."/>
            </div>
            <div>
                {!isLoading && (<button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>)}
            </div>
        </form>
    </>
    )

}

export default Map;
