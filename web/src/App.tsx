import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { AddBillRequest } from './proto/svc/bill_api_pb'
import { BillClient } from './proto/svc/Bill_apiServiceClientPb'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { GetToken } from './Utils';

function App() {

  var isLogin = GetToken()
  var navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      return navigate("/login");
    }
  }, [isLogin]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
