import React from "react";
import {Route, Routes} from "react-router-dom"
import Contacts from "./Component/Contacts";
import Home from "./Component/Home";
import Forms from "./Component/Forms";



function AllRoutes(){
    return(
        <>
        <div>
        <Routes>
                <Route  path="/" element={<Home/>}></Route>
                <Route path="/Contacts" element={<Contacts/>}></Route>
                <Route path="/Forms" element={<Forms/>}></Route>
        </Routes>
        </div>
            
        </>
    )
}

export default AllRoutes;