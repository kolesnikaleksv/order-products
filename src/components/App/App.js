
import Orders from '../Orders/Orders';
import TopMenu from '../TopMenu/TopMenu';
import Sidebar from '../sidebar/sidebar';
import Product from '../product/Product';
import Groups from '../Groups/Groups';
import Users from '../Users/Users';
import Settings from '../Settings/Settings';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './app.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <TopMenu />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route path='/orders' element={<Orders/>} />
            <Route path='/groups' element={<Groups/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/sets' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
