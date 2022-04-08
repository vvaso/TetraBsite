import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './private/SideNav';



const Navbar = () => (
  <>
    <div className='navbar-fixed'>
      <nav className='light blue' >
        <div className="center">
          <div className='nav-wraper'>
            <Link className='brand-logo' to='/'> TetraByte Travel </Link>
            <Link to='/' data-target='mobile-nav' className='sidenav-trigger' > </Link>
            <ul className='right hide-on-med-and-down'>
              <li>
              <Link className='waves-light' to='/'> Home </Link>
              </li>
              <li>
              <Link className='waves-light' to='/search'> Search </Link>
              </li>
              <li>
              <Link className='waves-light' to='/gallery'> Gallery </Link>
              </li>
              <li>
              <Link className='waves-light' to='/contact-us'> Contact </Link>
              </li>
              <li>
              <Link className='waves-light' to='/about-creator'> About Us  </Link>
              </li>  
            </ul>
          </div>
        </div>
        <a class="waves-effect waves-teal btn-small"  href="https://travel.gov.gr/"target="_blank" rel="noreferrer">⮞⮞⮞⮞⮞⮞Please Check Covid19 Instructions Before Travelling⮜⮜⮜⮜⮜⮜</a>
      </nav>
    </div>
    <SideNav />
  </>
);


export { Navbar };