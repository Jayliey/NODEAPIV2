import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpPage from "./pages/SignUpPage";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () =>{
  return(

    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          {/*tried using link but it is clearing the screen so i will stick to this tag*/}
          <a href="/"><h2 className="text-white text-2xl font-bold">JULIE's React CRUD</h2></a>
        </div>
      </nav>

      <div className="container mx-auto p-2 h-full">
      <Routes>
        <Route index element={<LoginPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
      </Routes>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;