import user from '../../images/user.jpg';
import settings from '../../images/cog.png';
import { Link, NavLink } from 'react-router-dom';
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
      <div>
        <ul className='sidebar__nav'>
          {/* <li className='sidebar__nav--item'>
            <Link to='orders'>orders</Link>
          </li>
          <li className='sidebar__nav--item active'>
            <Link to='groups' >groups</Link>
          </li>
          <li className='sidebar__nav--item'>
            <Link to='product'>product</Link>
          </li>
          <li className='sidebar__nav--item'>
            <Link to='users'>users</Link>
          </li>
          <li className='sidebar__nav--item'>
            <Link to='sets'>sets</Link>
          </li> */}
          <li className='sidebar__nav--item'>
            <NavLink to='orders'>orders</NavLink>
          </li>
          <li className='sidebar__nav--item'>
            <NavLink to='groups' >groups</NavLink>
          </li>
          <li className='sidebar__nav--item'>
            <NavLink to='product'>product</NavLink>
          </li>
          <li className='sidebar__nav--item'>
            <NavLink to='users'>users</NavLink>
          </li>
           <li className='sidebar__nav--item'>
            <NavLink to='sets'>sets</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;