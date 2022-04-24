import { useEffect, useMemo, useState } from 'react';
import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import { GetToken } from './Utils';
import BillPage from './Pages/Bill';
import ReceiptPage from './Pages/Receipt';
import { Box, createTheme, ThemeProvider, Toolbar } from '@mui/material';
import ParrotDrawer, { ColorModeContext } from './Components/Drawer';

function App() {

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  var isLogin = GetToken()
  var navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      return navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <ParrotDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className="App">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/bill" element={<BillPage />} />
                <Route path="/receipt" element={<ReceiptPage />} />
              </Routes>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>


  );
}

export default App;
