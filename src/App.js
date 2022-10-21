import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Shop from './routes/Shop/Shop.component';

import './scss/App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> }></Route>
        <Route path='shop' element={ <Shop /> }></Route>
      </Route>
    </Routes>
  );
}

export default App;
