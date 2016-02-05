/**
 * Created by hongbotian on 1/15/16.
 */
'use strict';

var ReactRouter = window.ReactRouter; //ReactRouter is included in .html
var ForumsRouter = ReactRouter.Router;




var ContentHeader = React.createClass({
    render: function () {

        return <section className="content-header">
            <h1>
                Dashboard
                <small>Version 2.0</small>
            </h1>
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                <li className="active">Dashboard</li>
            </ol>
        </section>
    }
});

var ContentBody = React.createClass({
    render: function () {

        return  <section className="content">
                    <ForumsRouter routes={forumsRoutes} />
                </section>
    }
});

var ContentItem = React.createClass({
    render: function () {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});
/*
const forumsRoutes = {
    path: '/',
    component: ContentItem,
    indexRoute: { component: forumsSideMenuItems[0].reactComponent },
    childRoutes: [
        //side menu
        { path: forumsSideMenuItems[0].path, component: forumsSideMenuItems[0].reactComponent},
        { path: forumsSideMenuItems[1].path, component: forumsSideMenuItems[1].reactComponent},
        { path: forumsSideMenuItems[2].path, component: forumsSideMenuItems[2].reactComponent},

        //top nav
        { path: "profile", component: ProfileSelector},
        { path: "postarticle", component: PostArticleSelector},

        //forum detail
        { path: "api/v1/topic/:tid", component: ForumsTopicDetail},

        //error handler
        { path: "*", component: Error500}
    ]
};
*/

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

var ContentWrapper = React.createClass({
    render: function() {
        return <div className="content-wrapper">
            <ContentHeader />
            <ContentBody />
        </div>
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
//ReactDOM.render(<App />, document.getElementById('huami_forums'));
//ReactDOM.render(<App />, document.body);
