import TopMenu from '../TopMenu/TopMenu';
import Sidebar from '../sidebar/sidebar';
import Routing from '../Routing/Routing';

import './app.scss';

function App() {

  return (
      <div className='app'>
        <TopMenu />
        <div className='app__body'>
          <Sidebar/>
          <Routing />
        </div>
      </div>
  );
}

export default App;
