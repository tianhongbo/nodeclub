'use strict';

//var React = require('react');

var HeaderLogoutMenu = React.createClass({
    render: function() {
        return <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li>
                    <a href="/signin" data-toggle="control-sidebar"><i className="fa fa-sign-in"></i>
                        Login</a>
                </li>
                <li>
                    <a href="/signup" data-toggle="control-sidebar"><i className="fa fa-user-plus"></i>
                        Signup</a>
                </li>
            </ul>
        </div>
    }
});

var HeaderLoginMenu = React.createClass({
    render: function() {
        return <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li>
                    <a href="#/postarticle" data-toggle="control-sidebar"><i className="fa fa-edit"></i>
                        Post-Article</a>
                </li>

                <li className="dropdown user user-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="/public/images/i64X64.ico" className="user-image" alt="User Image"/>
                        <span className="hidden-xs">Mike Lee</span>
                    </a>
                    <ul className="dropdown-menu nav nav-stacked">
                        <li className="user-header">
                            <img src="/public/images/i64X64.ico" className="img-circle" alt="User Image"/>
                            <p>
                                Software Engineer
                                <small>I love Huami</small>
                            </p>
                        </li>
                        <li className="user-body no-padding">
                            <div className="col-xs-12 text-center"></div>
                            <a href="#/profile" className="btn btn-default btn-flat">Profile</a>
                            <a href="#/message" className="btn btn-default btn-flat">Message Center</a>
                        </li>
                        <li className="user-footer no-padding">
                            <div>
                                <form action="/signout" method="post">
                                    <input type="submit" className="btn btn-default btn-flat" value="Log out"/>
                                </form>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    }

});

var HeaderMenu = React.createClass({

    render: function() {
        if (this.props.isLogin == true) {
            return <HeaderLoginMenu />
        } else {
            return <HeaderLogoutMenu />
        }
    }
});

var HeaderSelector = React.createClass({

    getInitialState: function() {
        return {isLogin: false}
    },

    statics: {
        getCookie: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        },

        getAllCookies: function() {
            return document.cookie;
        }

    },

    /**
     * Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call setState
     * within this method, render() will see the update state and will be executed only once despite the state change.
     */

    componentWillMount: function() {
        if (HeaderSelector.getCookie("huami_usa") == null) {
            console.log("not log in.");
            this.setState({isLogin: false});
        } else {
            console.log("logged in already.");
            this.setState({isLogin: true});
        }
    },

    render: function () {

        return <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>Huami</b></span>
                <span className="logo-lg"><img src="/public/images/huami-usa.png" className="width:170px"/></span>
            </a>
            <nav className="navbar navbar-static-top" role="navigation">

                <a href="#/" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span><b>  Home  </b></span>
                </a>

                <a href="#/support" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span><b>  Support  </b></span>
                </a>

                <a href="#/forums" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span><b>   Forums   </b></span>
                </a>

                <HeaderMenu isLogin = {this.state.isLogin} />

            </nav>
        </header>
    }
});

//component.HeaderSelector = HeaderSelector;

//module.exports = HeaderSelector;
window.HeaderSelector=HeaderSelector;