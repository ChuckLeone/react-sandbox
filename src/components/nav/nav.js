import React from 'react';

const Nav = React.createClass ({
    render() {
        return(
            <nav className="navbar navbar-sub navbar-default" role="navigation">
                <div className="container-fluid">
                        <div className="navbar-collapse subnavbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="/home">Link</a></li>
                                <li><a href="/app">Link</a></li> 
                            </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Nav;