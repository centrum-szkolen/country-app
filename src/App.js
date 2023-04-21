import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Homepage from './pages/Homepage/Homepage';
import Country from './pages/Country/Country';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/country/:name" element={<Country/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
