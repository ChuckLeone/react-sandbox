import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
          <div className="panel panel-default">
              <div className="panel-heading">
                  <h2>Login</h2>
              </div>
              <div className="panel-body">
                  <p>Please login with your email address or campus ID.</p>
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

module.exports = LoginForm;