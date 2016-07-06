import React from 'react';
//import Default from 'default';

var Header = React.createClass({
    render() {
        return(
            <div className="row">
                <div className="col-md-6">
                   logo
                </div>
                <div className="col-md-6">
                   name
                   <img src={this.props.UserAvatarProp} />
                </div>
            </div>
        )
    }
});

module.exports = Header;