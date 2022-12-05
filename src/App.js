import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from './components/PhoneBook';

export function App() {
  <Routes>
    <Route path='/' element={<PhoneBook />} />
    {/* <Route path='' element={< />} /> */}
  </Routes>
}
