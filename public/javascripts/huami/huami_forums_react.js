/**
 * Created by hongbotian on 1/15/16.
 */
'use strict';

/*
 var utils = require('../js/utils');

 var React = require('react');
 var ReactDom = require('react-dom');
 var ReactRouter = require('react-router');
 var Route = ReactRouter.Route;
 var RouteHandler = ReactRouter.RouteHandler;
 var DefaultRoute = ReactRouter.DefaultRoute;
 var NotFoundRoute = ReactRouter.NotFoundRoute;

 var TimelineSelector = require('./profile/timeline');
 var ProfileSelector = require('./profile/profile');
 var PostArticleSelector = require('./tools/post-article');
 var ArticleDetailSelector = require('./tools/article-detail');
 var Error500 = require('./profile/500');
 var HeaderSelector = require('./frame/header');
 var SideBarSelector = require('./frame/sidebar');
 var FooterSelector = require('./frame/footer');
 var NavMapSelector = require('./frame/navmap');
 var ContentSelector = React.createClass({
 render: function () {
 return {};
 }
 });

 var App = React.createClass({
 render: function () {
 return {};
 }
 });
 */
var ReactRouter = window.ReactRouter; //ReactRouter is included in .html
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

const sideMenuItems = [
    {
        "_id" : "56177c406a58b7cb3826e1a4",
        "name" : "Announcement",
        "icon" : "fa fa-bullhorn",
        "path" : "announcement",
        "reactComponent" : ForumsAnnouncement,
        "sort" : 1
    },

    /* 2 */
    {
        "_id" : "56177c606a58b7cb3826e1a5",
        "name" : "Shouhuan",
        "icon" : "fa fa-heartbeat",
        "path" : "shouhuan",
        "reactComponent" : ForumsShouhuan,
        "sort" : 1
    },

    /* 3 */
    {
        "_id" : "56177c7f6a58b7cb3826e1a6",
        "name" : "Scale",
        "icon" : "fa fa-balance-scale",
        "path" : "scale",
        "reactComponent" : ForumsScale,
        "sort" : 1
    }
];

var ContentSelector = React.createClass({
    render: function () {

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Version 2.0</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                <section className="content">
                    {this.props.children}
                </section>
            </div>
        );
    }
});

const routes = {
    path: '/',
    component: ContentSelector,
    indexRoute: { component: sideMenuItems[0].reactComponent },
    childRoutes: [
        //side menu
        { path: sideMenuItems[0].path, component: sideMenuItems[0].reactComponent},
        { path: sideMenuItems[1].path, component: sideMenuItems[1].reactComponent},
        { path: sideMenuItems[2].path, component: sideMenuItems[2].reactComponent},

        //top nav
        { path: "profile", component: ProfileSelector},
        { path: "postarticle", component: PostArticleSelector},

        //forum detail
        { path: "api/v1/topic/:tid", component: ForumsTopicDetail},

        //error handler
        { path: "*", component: Error500}
    ]
};


/*
 var ContentSelector = React.createClass({
 render: function () {
 return (
 <div id="frame-content">
 <div className="content-wrapper">
 <NavMapSelector />

 <div id="content">
 <RouteHandler />
 </div>
 </div>
 </div>)
 }
 });

 */
var App = React.createClass({
    render: function () {
        return (
            <div className="wrapper">
                <HeaderSelector />
                <SideBarSelector sideMenuItems={sideMenuItems} />
                <Router routes={routes} />
                <FooterSelector />
            </div>
        )
    }
});

/*
 ReactRouter.run(<Route path="/" handler={App}>

 <DefaultRoute handler={ProfileSelector}/>

 <Route name='profile' path="profile" handler={ProfileSelector}/>
 <Route name='timeline' path="timeline/:categoryId" handler={TimelineSelector}/>
 <Route name='postarticle' path="postarticle" handler={PostArticleSelector}/>
 <Route name='articledetail' path="articledetail/:id" handler={ArticleDetailSelector}/>
 <Route name='editdetail' path="editdetail/:id" handler={PostArticleSelector}/>

 <NotFoundRoute handler={Error500}/>
 </Route>, ReactRouter.HashLocation, function (Root) {
 ReactDOM.render(<Root/>, document.getElementById('admin'));
 });
 */
//$.AdminLTE.options.sidebarExpandOnHover=true;
ReactDOM.render(<App />, document.getElementById('huami_forums'));