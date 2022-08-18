import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../Pages/Login/index';
import { Cadastro } from '../Pages/Cadastro/index';
import { Home } from '../Pages/Home/index';

export function Rotas() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/cadastro" element={<Cadastro/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
      </Router>
  )
}