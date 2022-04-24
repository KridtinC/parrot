import { useEffect } from 'react';
import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import { GetToken } from './Utils';
import { ParrotNav } from './Components/Navbar';
import BillPage from './Pages/Bill';
import ReceiptPage from './Pages/Receipt';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  var isLogin = GetToken()
  var navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      return navigate("/login");
    }
  }, [isLogin]);

  return (
    <ThemeProvider theme={darkTheme}>
      <ParrotNav />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bill" element={<BillPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;
