import './App.css';
import React from 'react';
import { BrowserRouter, Routes,Route, Link,useNavigate } from "react-router-dom";
import Calendar from './components/Calendar';
import Spinner from './components/Spinner';
import SighInForm from './components/AlohaSection/SignInForm';
import CounterPage from './pages/CounterPage';
import LoaderPage from './pages/LoaderPage';

const Home = ()=> {return <h1>Home</h1>};

function App (){
    return <>
        <BrowserRouter> 
        <h1>App title</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/counter">Counter</Link></li>
              <li><Link to="/spinner">Spinner</Link></li>
              <li><Link to="/sighinform">SighInForm</Link></li>
              <li><Link to="/load">Loader</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/spinner" element={<Spinner />} />
            <Route path="/sighinform" element={<SighInForm />} />
            <Route path="*" element={<PageNotFound /> } />
            <Route path="/load" element={<LoaderPage /> } />
          </Routes>
        </BrowserRouter>
    </>
}
const PageNotFound = (props)=>{
  const navigate = useNavigate();
  setTimeout(()=>{navigate('/',{replace:true})},2000);
  return <h2>404, replace to home page</h2>
}

export default App;
