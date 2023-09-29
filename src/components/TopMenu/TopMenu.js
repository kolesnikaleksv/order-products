import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import clock from '../../images/clock.png';
import socketIO from 'socket.io-client';

import './topMenu.scss';

const socket = socketIO.connect('http://localhost:4000');

const TopMenu = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [activeUser, setActiveUser] = useState(1);

  useEffect(() => {
    setCurrentDate(getDate());
    socket.on('newUserResponse', (data) => setActiveUser(data));
    socket.on('newUser', (data) => setActiveUser(data));
  },[activeUser])

  function getDate() {
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = today.getMonth() + 1;
    let month = monthNames[monthIndex].slice(0, 3).toUpperCase();
    const year = today.getFullYear();
    const date = today.getDate();
    
    return `${date} ${month}, ${year}`;
  }

  return (
    <div className='header bg-light'>
        <div className='header__container container-md'>
          
          <div className='header__image'>
            <img src={logo} alt='logo' />
          </div>
          <div className='header__filter'>
            <input
                className='header__filter--input'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
          </div>
          <div className='header__tools'>
            <div className='header__counter'>
              <span>Active</span>
              <span>users: {activeUser}</span>
            </div>
            <div className='header__date'>
              <span>Today</span>
              <span>{currentDate}</span>
            </div>
            <div className='header__timer'>
              <img src={clock} alt='clock'/>
              <span>17:23</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TopMenu;