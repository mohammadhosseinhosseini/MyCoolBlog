import React, { Component } from 'react';
import Link from 'next/link';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='NavBar'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <Link href='/'>
              <a className='navbar-brand'>My cool blog</a>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <Link href='/'>
                    <a className='nav-link'>
                      Home <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/signin'>
                    <a className='nav-link'>Sign In</a>
                  </Link>
                </li>{' '}
                <li className='nav-item'>
                  <Link href='/signup'>
                    <a className='nav-link'>Sign Up</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
