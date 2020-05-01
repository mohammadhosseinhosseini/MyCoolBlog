import React, { Component } from 'react';
import '../Styles/signin.module.css';
import Link from 'next/link';
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className='Signin'>
        <div className='login-page'>
          <div className='form'>
            {/* <form className='register-form' onSubmit={this.handleSubmit}>
              <input type='text' placeholder='name' />
              <input type='password' placeholder='password' />
              <input type='text' placeholder='email address' />
              <button>create</button>
              <p className='message'>
                Already registered? <a href='#'>Sign In</a>
              </p>
            </form> */}
            <form className='login-form' onSubmit={this.handleSubmit}>
              <input
                type='email'
                name='email'
                value={this.state.email}
                placeholder='email@example.com'
                onChange={this.handleChange}
              />
              <input
                type='password'
                name='password'
                value={this.state.password}
                placeholder='password'
                onChange={this.handleChange}
              />
              <button>login</button>
              <p className='message'>
                Not registered?
                <Link href='/signup'>
                  <a> Create an account</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
