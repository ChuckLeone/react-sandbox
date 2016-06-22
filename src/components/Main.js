require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import '../../bower_components/campus-labs-bootstrap/dist/css/cl.bootstrap.css';
//import '../../bower_components/campus-labs-icon-font/dist/latest/css/icons.min-v3.css';

class AppComponent extends React.Component {
  render() {
    return (
       <div className="index container-fluid">  
        <h1>Home Page</h1>
        <LoginForm />
      </div>
    );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
            
          <div className="panel panel-default">
              <div className="panel-heading">
                  <h2>Login</h2>
              </div>
              <div className="panel-body">
                  <p>Please login with your campus ID.</p>
                  <form role="form">
                      <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                      <p>Not a user? <a href="">Sign up now</a></p>
              </div>
          </div>
    );
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;
