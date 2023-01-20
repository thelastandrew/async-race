import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Garage from './pages/garage/Garage';
import NotFound from './pages/notFound/NotFound';
import Winners from './pages/winners/Winners';

function App() {
  return (
    <>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li>
            <Link to='/garage'>Garage</Link>
          </li>
          <li>
            <Link to='/winners'>Winners</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/garage' />} />
        <Route path='/garage' element={<Garage />} />
        <Route path='/winners' element={<Winners />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
