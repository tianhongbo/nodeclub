/**
 * Created by hongbotian on 1/15/16.
 */
'use strict';

var ReactRouter = window.ReactRouter; //ReactRouter is included in .html
var IndexRouter = ReactRouter.Router;

const sideMenuItems = [
    /* 1 */
    {
        "_id" : "66177c406a58b7cb3826e1f4",
        "name" : "Forums",
        "icon" : "fa fa-bullhorn",
        "path" : "forums",
        "parent": null,
        "reactComponent" : null,
        "sort" : 1
    },

    /* 2 */
    {
        "_id" : "66177c606a58b7cb3826e1a5",
        "name" : "Support",
        "icon" : "fa fa-heartbeat",
        "path" : "support",
        "parent": null,
        "reactComponent" : null,
        "sort" : 1
    },

    /* 3 */
    {
        "_id" : "66177c606a58b7cb3826e1a6",
        "name" : "Sign In",
        "icon" : "fa fa-sign-in",
        "path" : "signin",
        "parent": null,
        "reactComponent" : null,
        "sort" : 1
    },

    /* 4 */
    {
        "_id" : "66177c606a58b7cb3826e1a7",
        "name" : "Sign Up",
        "icon" : "fa fa-edit",
        "path" : "signup",
        "parent": null,
        "reactComponent" : null,
        "sort" : 1
    }
];

const forumsSideMenuItems = [
    {
        "_id" : "56177c406a58b7cb3826e1a4",
        "name" : "Announcement",
        "icon" : "fa fa-bullhorn",
        "path" : "announcement",
        "parent": "forums",
        "reactComponent" : ForumsAnnouncement,
        "sort" : 1
    },

    /* 2 */
    {
        "_id" : "56177c606a58b7cb3826e1a5",
        "name" : "Shouhuan",
        "icon" : "fa fa-heartbeat",
        "path" : "shouhuan",
        "parent": "forums",
        "reactComponent" : ForumsShouhuan,
        "sort" : 1
    },

    /* 3 */
    {
        "_id" : "56177c7f6a58b7cb3826e1a6",
        "name" : "Scale",
        "icon" : "fa fa-balance-scale",
        "path" : "scale",
        "parent": "forums",
        "reactComponent" : ForumsScale,
        "sort" : 1
    }
];

const supportSideMenuItems = [
    {
        "_id" : "56177c406a58b7cb3826e1a4",
        "name" : "Frequent Q&A",
        "icon" : "fa fa-question-circle",
        "path" : "fqa",
        "parent": "support",
        "reactComponent" : SupportFqaSelector,
        "sort" : 1
    },

    /* 2 */
    {
        "_id" : "56177c606a58b7cb3826e1a5",
        "name" : "Download",
        "icon" : "fa fa-download",
        "path" : "download",
        "parent": "support",
        "reactComponent" : SupportDownloadSelector,
        "sort" : 1
    },

    /* 3 */
    {
        "_id" : "56177c7f6a58b7cb3826e1a6",
        "name" : "Ask in Forums",
        "icon" : "fa fa-users",
        "path" : "askinforums",
        "parent": "support",
        "reactComponent" : PostArticleSelector,
        "sort" : 1
    },

    /* 4 */
    {
        "_id" : "562f9ebecb0f07ee4e813507",
        "name" : "Live Chat with Technician",
        "icon" : "fa fa-comment",
        "path" : "livechat",
        "parent": "support",
        "reactComponent" : SupportLivechatSelector,
        "sort" : 2
    },

    /* 5 */
    {
        "_id" : "562f9ee0cb0f07ee4e813508",
        "name" : "Summit a ticket",
        "icon" : "fa fa-ticket",
        "path" : "ticket",
        "parent": "support",
        "reactComponent" : SupportTicketSelector,
        "sort" : 3
    }
];
var ContentHeader = React.createClass({
    render: function () {

        var currentPath = this.props.path;


        var pathArray = [""];
        if (currentPath != "/") {
            // "/support/download" -> ["", "support", "download"]
            pathArray = currentPath.split('/');
        }

        var navPath = "";
        var category = pathArray.length > 1 ? pathArray[1] : "Home" ;

        //console.log("category = " + category);
        //console.log("pathArray = " + pathArray.toString());
        //console.log("currentPath = " + currentPath);
        //console.log("len = " + len);

        var lis = [];
        for (var i = 1; i < pathArray.length; i++) {
            //skip [0], which is ""
            navPath = navPath + "/" + pathArray[i];
            lis.push(<li key={pathArray[i]}><a href={"#" + navPath}>{pathArray[i]}</a></li>);
        }

        return (
            <section className="content-header">
                <h1>{category}</h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    {lis}
                </ol>
            </section>
        )
    }
});

var ContentBody = React.createClass({
    render: function () {

        return (
            <section className="content">
                {this.props.contents}
            </section>
        )
    }
});

var AppSideMenu = React.createClass({
    render: function() {
        return (
            <SideBarSelector sideMenuItems={sideMenuItems} />
        )
    }
});
var ForumsSideMenu = React.createClass({
    render: function() {
        return (
            <SideBarSelector sideMenuItems={forumsSideMenuItems} />
        )
    }
});

var SupportSideMenu = React.createClass({
    render: function() {
        return (
            <SideBarSelector sideMenuItems={supportSideMenuItems} />
        )
    }
});

var ForumsContentWrapper = React.createClass({
    render: function() {

        return (
            <div className="content-wrapper">
                <ContentHeader path = {this.props.location.pathname} />
                <ContentBody contents = {this.props.children} />
            </div>
        )
    }
});

var SupportContentWrapper = React.createClass({
    render: function() {

        return (
            <div className="content-wrapper">
                <ContentHeader path = {this.props.location.pathname} />
                <ContentBody contents = {this.props.children} />
            </div>
        )
    }
});

var LoginContentWrapper = React.createClass({
    render: function() {

        return (
            <div className="content-wrapper">
                <ContentHeader path = {this.props.location.pathname} />
                <section className="content">
                    <LoginSelector />
                </section>
            </div>
        )
    }
});

var SignupContentWrapper = React.createClass({
    render: function() {

        return (
            <div className="content-wrapper">
                <ContentHeader path = {this.props.location.pathname} />
                <section className="content">
                    <SignUpSelector />
                </section>
            </div>
        )
    }
});

var AppContentWrapper = React.createClass({
    render: function() {

        return (
            <div className="content-wrapper">
                <ContentHeader path = {this.props.location.pathname} />
                <section className="content">
                    <LoginSelector />
                </section>
            </div>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className="wrapper">
                <HeaderSelector />
                {this.props.sideMenu}
                {this.props.content}
                <FooterSelector />
            </div>
        )
    }
});

/**
 *
 * @type {{path: string, component: *, indexRoute: {components: {sideMenu: *}}, childRoutes: *[]}}
 * If there are multiple components in any level path, the children of low level will be injected into all these
 * components as "this.props.children".
 * e.g. "forums" has two components, which are {sideMenu: ForumsSideMenu, content: ContentWrapper}. When the user explores
 * the path of "/forums/announcement", the "ForumsAnnouncement" will be injected into both of two components as
 * "this.props.children".
 *
 */

const indexRoutes = {
    path: '/',
    component: App,
    indexRoute: { components: { sideMenu: AppSideMenu, content: AppContentWrapper } },
    childRoutes: [

        // "/forums"
        { path: 'forums',
            components: { sideMenu: ForumsSideMenu, content: ForumsContentWrapper},
            indexRoute: { component: forumsSideMenuItems[0].reactComponent },
            childRoutes: [
                { path: forumsSideMenuItems[0].path, component: forumsSideMenuItems[0].reactComponent },
                { path: forumsSideMenuItems[1].path, component: forumsSideMenuItems[1].reactComponent },
                { path: forumsSideMenuItems[2].path, component: forumsSideMenuItems[2].reactComponent }
            ]},

        // "/support"
        { path: 'support',
            components: { sideMenu: SupportSideMenu , content: SupportContentWrapper },
            indexRoute: { component: supportSideMenuItems[0].reactComponent },
            childRoutes : [
                //side menu
                { path: supportSideMenuItems[0].path, component: supportSideMenuItems[0].reactComponent },
                { path: supportSideMenuItems[1].path, component: supportSideMenuItems[1].reactComponent },
                { path: supportSideMenuItems[2].path, component: supportSideMenuItems[2].reactComponent },
                { path: supportSideMenuItems[3].path, component: supportSideMenuItems[3].reactComponent },
                { path: supportSideMenuItems[4].path, component: supportSideMenuItems[4].reactComponent }
            ]
        },

        // "/support"
        { path: 'signin',
            components: { sideMenu: AppSideMenu , content: LoginContentWrapper }
        },

        // "/support"
        { path: 'signup',
            components: { sideMenu: AppSideMenu , content: SignupContentWrapper }
        },

        //error handler
        { path: "*",
            components: { sideMenu: SupportSideMenu , content: SupportContentWrapper }
        }
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




var AppForums = React.createClass({
    render: function () {
        return (
            <div className="wrapper">
                <HeaderSelector />
                <SideBarSelector sideMenuItems={forumsSideMenuItems} />
                <ContentWrapper />
                <FooterSelector />
            </div>
        )
    }
});
window.AppForums = AppForums;

var AppSupport = React.createClass({
    render: function () {
        return (
            <div className="wrapper">
                <HeaderSelector />
                <SideBarSelector sideMenuItems={supportSideMenuItems} />
                <Router routes={supportRoutes} />
                <FooterSelector />
            </div>
        )
    }
});
window.AppSupport = AppSupport;

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
//ReactDOM.render(<App />, document.getElementById('huami_forums'));
ReactDOM.render(<IndexRouter routes={indexRoutes} />, document.getElementById("huami"));
