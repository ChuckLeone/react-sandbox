import React from 'react';

const Nav = React.createClass ({
    render() {
        return(
    <nav className="navbar navbar-sub navbar-default" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse subnavbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                                <li role="presentation"><a href="#" role="menuitem">Another action</a></li>
                                <li role="presentation" className="dropdown-header">Header</li>
                                <li role="presentation"><a href="#" role="menuitem">Something else here</a></li>
                                <li className="divider" role="presentation"></li>
                                <li role="presentation"><a href="#" role="menuitem">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
        );
    }
});

export default Nav;