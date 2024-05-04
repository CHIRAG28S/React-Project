import React, { Component } from 'react'
import Navigation from './navigation'
import Footer from './Footer'
import SeventhPage from './SeventhPage';

export default class Login extends Component {
    loginEvent() {
        const inputEmail = document.getElementById('inputEmail').value;
        const inputPassword = document.getElementById('inputPassword').value;
        if (inputEmail == 'abc@demo.com' && inputPassword == '1234') {
          alert('Login successfully');
        } else {
          alert('Please enter valid email.');
        }
      }
  render() {
    return (
        <>
          <Navigation />
      <main>
      <div class="container login">
      <div class="row align-items-center">
        <div class="col-md-6 login-image-container">
            <img src='/gym_images/login.jpg' alt='image' class="login-image img-fluid" />
        </div>
        <div class="col-md-6">
            <h2 class="trial_content_header">Login</h2>
           <div className='login-container'>
           <div class="input_box">
                        <input type="email" id="inputEmail" class="form_control" placeholder="Enter your email"  />
                    </div>
                    <div class="input_box">
                    <input type="password" id="inputPassword" class="form_control" placeholder="Enter your Password"  />

                    </div>

           </div>
            <button class="thirdpage_btn" onClick={this.loginEvent}>Sign In</button>
        </div>
        </div>
        </div>
      <SeventhPage />
      <Footer />

</main>
      </>
    )
  }
}
