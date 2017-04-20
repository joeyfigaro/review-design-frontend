import React,{Component} from 'react';
import Dropdown,{DropdownTrigger,DropdownContent} from 'react-simple-dropdown';
import {logout} from '../../functions.js';

export default PersonalSettings = () => {
    return (
      <Dropdown>
          <DropdownTrigger>
              <div className="profile-pic">MyProfile</div>
          </DropdownTrigger>
          <DropdownContent>
              <ul>
                  <li>
                      <a href="/change-password">change-password</a>
                  </li>
                  <li className="icons">
                      <span className="logout" onClick={logout}></span>
                  </li>
              </ul>
          </DropdownContent>
      </Dropdown>
    )
}
