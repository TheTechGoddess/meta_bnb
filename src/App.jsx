import {Route, Routes } from 'react-router-dom'; 
import Home from './pages/HomePage';
import Places from './pages/PlacesPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/places" element={<Places/>} />
      </Routes>
    
  );
}

export default App;