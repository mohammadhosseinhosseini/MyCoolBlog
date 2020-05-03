import React, { Component } from 'react';
import Link from 'next/link';
// import altrabo from './images/altrabo.png';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='NavBar'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg bg-white'>
            <div className='container'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'>h</span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item active'>
                    <Link href='/'>
                      <img src='images/altrabo.png' alt='' />
                    </Link>
                  </li>
                  <li className='nav-item active'>
                    <Link href='/'>
                      <a className='nav-link'>بلیت هواپیما</a>
                    </Link>
                  </li>
                  <li className='nav-item active'>
                    <Link href='/'>
                      <a className='nav-link'>بلیت اتوبوس</a>
                    </Link>
                  </li>
                  <li className='nav-item active'>
                    <Link href='/'>
                      <a className='nav-link'>رزرو هتل</a>
                    </Link>
                  </li>
                  <li className='nav-item active'>
                    <Link href='/'>
                      <a className='nav-link'>
                        <i class='fas fa-user ml-2' />
                        ورود/ عضویت
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
