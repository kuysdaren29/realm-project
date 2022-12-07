import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import SigninPage from './components/authPages/userSignin/SigninPage';
import SignupPage from './components/authPages/userSignup/SignupPage';

const theme = createTheme({
  palette:{
   primary:{
    main: '#00838f'
   },
   secondary: {
    main: '#2196f3'
   }, 
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}> </Route>
            <Route path='sign-in' element={<SigninPage/>}> </Route>
            <Route path='sign-up' element={<SignupPage/>}></Route>
        </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
