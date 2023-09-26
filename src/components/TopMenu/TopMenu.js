import './topMenu.scss';
// import logo from '../../images/inventory-logo.svg';
// import logo from '../../images/inventory-logo.png';
import logo from '../../images/logo.png';

// import clock from '../../images/clock.jpg';
import clock from '../../images/clock.png';


const TopMenu = () => {
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
            <div className='header__date'>
              <span>Today</span>
              <span>21 sep, 2023</span>
            </div>
            <div className='header__timer'>
              <img src={clock} alt='clock'/>
              <span>17:23</span>
            </div>
          </div>
        </div>
    </div>
    // <nav className='navbar navbar-expand-lg bg-green'>
    //   <div className='container-fluid'>
    //     <a className='navbar-brand' href='#'>
    //       Navbar
    //     </a>
    //     <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon'></span>
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <form className='d-flex' role='search'>
    //         <input
    //           className='form-control me-2'
    //           type='search'
    //           placeholder='Search'
    //           aria-label='Search'
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default TopMenu;
