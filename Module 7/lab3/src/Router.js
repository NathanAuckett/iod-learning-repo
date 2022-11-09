
import {Route, Routes } from "react-router-dom";

import Home from "./components/Home"
import Posts from "./components/Posts"
import Dashboard from "./components/Dashboard"


export default function Router(){
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}