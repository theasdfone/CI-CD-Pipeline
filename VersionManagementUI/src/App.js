import { Route, Routes } from 'react-router-dom';

import Main from './js/views/main.jsx';
import Edit from './js/views/edit.jsx';

export default function App() {
    return (
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
    )
}