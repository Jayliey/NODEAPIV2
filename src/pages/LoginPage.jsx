import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { VITE_BACKEND_URL } from "../App";


const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
   

    const getUser = async(e) => {
        e.preventDefault();
        if(email ==="" ||password ===""){
            alert('Please fill out all input completely');
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post(`${VITE_BACKEND_URL}/api/login`, { email, password });
            toast.success(response.data.message || 'Login successful');
            toast.success(`Welcome To Julie's React CRUD`);
            navigate("/home");
        } catch (error) {
            toast.error(error.response?.data.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
}

    return(
        <div className="mx-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
        <h2 className="font-semibold text-2xl mb-4 block text-center">
            LOGIN
        </h2>
        <form action="" onSubmit={getUser}>
            <div className="space-y-2">
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Email..."/>
            </div>
       
            <div className="space-y-2">
                <label>Password:</label>
                <input type="text" value={password} onChange={(e) =>setPassword(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Password..."/>
            </div>
            <div>
                {!isLoading && (<button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Login</button>)}
            </div>
            <p className="font-semibold mt-4 mb-3 block text-center">Don't have an Account? <a href="/signup" className="text-purple-700 hover:text-purple-600">Sign Up</a></p>
        </form>
    </div>
    )
}

export default LoginPage;