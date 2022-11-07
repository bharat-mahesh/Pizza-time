import React from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Logout from "./components/Logout";
import Pizza from "./components/Pizza";

const App=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<Pizza/>}/>
        </Route>
        <Route path="logout" element={<Logout/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default App