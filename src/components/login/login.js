import React from 'react';

var LoginForm = React.createClass ({
    getInitialState: function() {
    return {value: 'enter email'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
          <div className="panel panel-default">
              <div className="panel-heading">
                  <h2>Login</h2>
              </div>
              <div className="panel-body">
                  <form role="form">
                      <div className="form-group">
                      <label for="exampleInputEmail1">Email address or Campus ID</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="email address or compus ID" value={this.props.value} />
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
});

module.exports = LoginForm;