﻿'use strict';

//var React = require('react');

var ProfileSelector = React.createClass({
    render: function () {
        return <section className="content row">
            <div className="col-md-3">
                <div className="box box-primary">
                    <div className="box-body box-profile">
                        <img className="profile-user-img img-responsive img-circle" src="images/i64x64.ico"
                             alt="User profile picture"/>

                        <h3 className="profile-username text-center">Mike Lee</h3>

                        <p className="text-muted text-center">Web-Nodejs-Js Engineer</p>

                        <ul className="list-group list-group-unbordered">
                            <li className="list-group-item">
                                <b>Followers</b> <a className="pull-right">1,322</a>
                            </li>
                            <li className="list-group-item">
                                <b>Following</b> <a className="pull-right">543</a>
                            </li>
                            <li className="list-group-item">
                                <b>Friends</b> <a className="pull-right">13,287</a>
                            </li>
                        </ul>

                        <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">About Me</h3>
                    </div>
                    <div className="box-body">
                        <strong><i className="fa fa-book margin-r-5"></i> Education</strong>

                        <p className="text-muted">
                            China University
                        </p>

                        <hr/>

                        <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>

                        <p className="text-muted">Mountain View, CA</p>

                        <hr/>

                        <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>

                        <p>
                            <span className="label label-danger">Angularjs</span>
                            <span className="label label-info">Javascript</span>
                            <span className="label label-primary">Node.js</span>
                            <span className="label label-success">React</span>
                            <span className="label label-warning">Hybrid App</span>
                        </p>

                        <hr/>

                        <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                        <p>I love Huami!~</p>
                    </div>
                </div>
            </div>
        </section>
    }
});

//  component.ProfileSelector = ProfileSelector;

//module.exports =ProfileSelector;
window.ProfileSelector = ProfileSelector;