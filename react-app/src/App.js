import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import Main from './pages/Main';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>
          <Route path='/' element={<Main/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='test' element={<Test/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
