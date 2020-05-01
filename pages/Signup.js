import React, { Component } from 'react';
import '../Styles/signin.module.css';
import Link from 'next/link';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      passIsMatch: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword2 = this.handleChangePassword2.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleChangePassword2(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.password != this.state.password2) {
          this.setState({
            passIsMatch: false,
          });
          console.log('not match');
        } else {
          this.setState({
            passIsMatch: true,
          });
        }
      }
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className='Signin'>
        <div className='login-page'>
          <div className='form'>
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
              <input
                type='password'
                name='password2'
                value={this.state.password2}
                placeholder='repeat password'
                onChange={this.handleChangePassword2}
              />
              {this.state.passIsMatch ? null : <div>passwords not match</div>}
              <button>Sign Up</button>
              <p className='message'>
                Already registered?
                <Link href='/signin'>
                  <a> Sign in</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
