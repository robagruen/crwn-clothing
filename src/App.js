import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.component';

import './scss/App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
    </Routes>
  );
}

export default App;
