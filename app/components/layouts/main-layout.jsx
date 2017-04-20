import React, {Component} from 'react';
import Navigation from '../components/navigation.jsx';
import PersonalSettings from '../components/personal-settings.jsx';
import ToolBox from '../components/toolbox.jsx';

export default MainLayout = ({content}) => {
    return(
      <div className="main-layout-wrapper">
        <header className="site-header">
          <Navigation />
          <PersonalSettings />
        </header>
        <ToolBox
          pencil={true}
          eraser={true}
          square={true}
          ></ToolBox>
        {content}
      </div>
    )
}
