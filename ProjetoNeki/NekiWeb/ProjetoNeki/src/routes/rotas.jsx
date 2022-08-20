import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "../Pages/Login/index";
import { Cadastro } from "../Pages/Cadastro/index";
import { Home } from "../Pages/Home/index";
import { AuthContext } from "../context/AuthContext/index";
import { useNavigate } from "react-router-dom";
import { UserSkills } from "../Pages/UserSkills";

export function Rotas() {


    const SecurityTeste = () => {
        //const { token } = useContext(AuthContext);
        // return localStorage.getItem("senha") ? (
        //   <Navigate to={{ pathname: "/home" }} />
        // ) : (
        //   <Navigate to={{ pathname: "/login" }} />
        // );

        if(!localStorage.getItem("senha")) {
            return <Navigate to={{ pathname: "/" }} />
        }
        else{
            return <Navigate to={{ pathname: "/home" }} />
        }

    }
      
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userskills" element={<UserSkills />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
