import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AppState from './context/AppState';
import s from './App.module.css';
import GarageContainer from './pages/garage/GarageContainer';
import NotFound from './pages/notFound/NotFound';
import Winners from './pages/winners/Winners';

function App() {
  return (
    <>
      <nav className={s.navbar}>
        <ul className={s.navLinks}>
          <li>
            <Link to='/garage'>Garage</Link>
          </li>
          <li>
            <Link to='/winners'>Winners</Link>
          </li>
        </ul>
      </nav>
      <AppState>
        <Routes>
          <Route path='/' element={<Navigate to='/garage' />} />
          <Route path='/garage' element={<GarageContainer />} />
          <Route path='/winners' element={<Winners />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppState>
    </>
  );
}

export default App;
