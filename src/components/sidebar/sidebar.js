import user from '../../images/user.jpg';
import settings from '../../images/cog.png';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__image'>
        <img src={user} alt='user'/>
        <div className='sidebar__image--settings'>
          <img src={settings} alt='settings' />
        </div>
      </div>
        <ul className='sidebar__nav'>
          <li className='sidebar__nav--item'>
            <NavLink to='/' data-testid="main-link">orders</NavLink>
          </li>
          <li className='sidebar__nav--item'>
            <NavLink to='groups' data-testid='groups-link'>groups</NavLink>
          </li>
          <li className='sidebar__nav--item'>
            <NavLink to='product' data-testid="product-link">product</NavLink>
          </li>
          <li className='sidebar__nav--item'>
            <NavLink to='users' data-testid='users-link'>users</NavLink>
          </li>
           <li className='sidebar__nav--item'>
            <NavLink to='sets' data-testid="sets-link">sets</NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;