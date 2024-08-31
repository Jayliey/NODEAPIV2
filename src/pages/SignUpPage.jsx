import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";

const SignUpPage = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [isEmailUsed, setIsEmailUsed] = useState(null);
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const saveUser = async(e) => {
                e.preventDefault();
                if(name === "" || email ==="" || user === ""||password ===""){
                    alert('Please fill out all input completely');
                    return;
                }
                

        try {
            //checking the user
            const response = await axios.post(`${VITE_BACKEND_URL}/api/check`, { email: email });

                if (response.data.exists) {
                    toast.error('Email already exists. Please use a different email');
                } else {

                    // Add user code goes here
                    setIsLoading(true); 
                    const resp =await axios.post(`${VITE_BACKEND_URL}/api/signup`,{name: name, email: email, username: user, password: password});
                    toast.success(`Saved ${resp.data.name} successfully`);
                    toast.success(`Welcome To Julie's React CRUD`);
                    setIsLoading(false);
                    navigate("/home");
                    
                }
        }catch(error){

            console.log(error);
            toast.error('An error occurred');
        }

    }

    return(
        <div className="mx-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                SIGNUP
            </h2>
            <form action="" onSubmit={saveUser}>
                <div className="space-y-2">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name..."/>
                </div>
                <div className="space-y-2">
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Email..."/>
                </div>
                <div className="space-y-2">
                    <label>Username:</label>
                    <input type="text" value={user} onChange={(e) =>setUser(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Username..."/>
                </div>
                <div className="space-y-2">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Password..."/>
                </div>
                <div>
                    {!isLoading && (<button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Sign Up</button>)}
                </div>
            </form>
        </div>
    )
}

export default SignUpPage;
