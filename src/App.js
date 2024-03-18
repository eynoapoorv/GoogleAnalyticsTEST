
import './App.css';
import { Routes, Route } from "react-router-dom"
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';

function App() {
  return (
    <>
      <Routes>
        <Route>
        
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThirdPage />} />
          <Route path="/fourthPage" element={<FourthPage />} />

        </Route>
      </Routes>

    </>



  );
}

export default App;
