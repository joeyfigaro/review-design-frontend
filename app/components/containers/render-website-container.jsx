import React,{Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import RenderWebsite from '../components/render-website.jsx';
import MirroredSites from '../../api/mirror-sites.js';

export default RenderWebsiteContainer = createContainer(({params}) => {
  console.log(Meteor.userId(),"Meteor UserId()");
  let subscription = Meteor.subscribe('MirroredSites');
  let loading = !subscription.ready();
  let mirroredSite = MirroredSites.find({userId : Meteor.userId()},{sort : {date : -1}}).fetch()[0];
  console.log(mirroredSite);
  if(!mirroredSite) {
    mirroredSite = false;
  }
  return {
    loading,
    mirroredSite
  }
}, RenderWebsite);
