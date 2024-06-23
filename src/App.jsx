import React from "react"
import Navbar from "./components/Navbar"
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Error from "./components/ErrorPage";

const App = () => {
  
  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-gradient-to-r from-blue-900 to-blue-600">
      <Navbar/>
      <div className="flex flex-wrap justify-between max-w-[500px] w-[100%] items-center">
        <NavLink to="/" className="navlink text-white text-[14px] font-semibold px-[8px] py-[5px] rounded-md m-2">Your Weather</NavLink>
        <NavLink to="/search" className="navlink text-white text-[14px] font-semibold px-[8px] py-[5px] rounded-md m-2">Search Weather</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
};

export default App;
