import React from 'react';

const Header = () => (
       <header className="container-fluid top-bar">
            <div className="row">
            <a href="/" role="link"></a>
            <main-menu className="ng-isolate-scope">
            <div id="main-menu-wrapper">
                <div id="nav-toggle-button">
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>
                <nav id="main-menu" className="top-bar__nav">
                    <ul>
                        <li><a href="../">Home</a></li>
                        <li><a href="../#/interaction">Interaction Patterns</a></li>
                        <li><a href="/bootstrap" className="bootstrapGuide">Core UI (Bootstrap)</a></li>
                        <li><a href="https://commons.campuslabs.today/CoreWeb/" target="_blank">Core UI (Legacy)</a></li>
                        <li><a href="../#/brand">Product Design</a></li>
                    </ul>
                </nav>
            </div>
        </main-menu>
            </div>
            </header>
)
export default Header;