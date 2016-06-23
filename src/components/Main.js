require('normalize.css/normalize.css');
require('../styles/stylesheets/main.scss');

import React from 'react';
import '../../bower_components/campus-labs-bootstrap/dist/css/cl.bootstrap.css';
import Header from 'components/header/header';
import Nav from 'components/nav/nav';
import LoginForm from 'components/login/login';
import Footer from 'components/footer/footer';

class AppComponent extends React.Component {
  render() {
    return (
       <div className="index container-fluid">
        <Header />
        <Nav />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;