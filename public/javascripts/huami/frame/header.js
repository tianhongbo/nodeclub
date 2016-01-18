'use strict';

//var React = require('react');

var HeaderSelector = React.createClass({
  render: function () {
    return <header className="main-header">
      <a href="#" className="logo">
        <span className="logo-mini"><b>Huami</b></span>
        <span className="logo-lg"><img src="/public/images/huami-usa.png" className="width:170px"/></span>
      </a>


      <nav className="navbar navbar-static-top" role="navigation">

        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li>
              <a href="#/profile" data-toggle="control-sidebar"><i className="fa fa-user"></i>
                Profile</a>
            </li>
            <li>
              <a href="#/postarticle" data-toggle="control-sidebar"><i className="fa fa-edit"></i>
                Post-Article</a>
            </li>

            <li>
              <a href="/huami-login" data-toggle="control-sidebar"><i className="fa fa-sign-in"></i>
                Login</a>
            </li>

            <li>
              <a href="/huami-signup" data-toggle="control-sidebar"><i className="fa fa-user-plus"></i>
                Signup</a>
            </li>

            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="/public/images/i64X64.ico" className="user-image" alt="User Image"/>
                <span className="hidden-xs">Mike Lee</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src="/public/images/i64X64.ico" className="img-circle" alt="User Image"/>
                  <p>
                    Software Engineer
                    <small>I love Huami</small>
                  </p>
                </li>
                <li className="user-body">
                  <div className="col-xs-12 text-center"></div>
                </li>
                <li className="user-footer">
                  <div>
                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                    <a href="https://github.com/tianhongbo" className="btn btn-default btn-flat"
                       target="_blank">Followers</a>
                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  }
});

//component.HeaderSelector = HeaderSelector;

//module.exports = HeaderSelector;
window.HeaderSelector=HeaderSelector;