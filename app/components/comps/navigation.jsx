import React,{Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';


export default Navigation = () => {
  return(
    <nav className="main-navigation">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/websites">websites</a>
      </li>
    </nav>
  )
}
