import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'

export default class Navigation extends Component {
  render() {
    return (
      <nav class="nav">
        <div class="nav_logo"></div>

        <ul class="nav_links">
        
          <li class="link">
            <HashLink smooth to="/#home">Home</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/#program">Program</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/#service">Service</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/#about">About</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/store">Store</HashLink>
          </li>
         
          <li class="link">
            <HashLink smooth to="/#community">Community</HashLink>
          </li>
        </ul>
        <a class="nav_btn" href="/login">Join Now</a>
      </nav>

    )
  }
}
