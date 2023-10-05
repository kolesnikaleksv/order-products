import TopMenu from '../TopMenu/TopMenu';
import Sidebar from '../sidebar/sidebar';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

import './app.scss';

function App() {

  return (
      <div className='app'>
        <TopMenu />
        <div className='app__body'>
          <Sidebar/>
          <NavigationMenu />
        </div>
      </div>
  );
}

export default App;
