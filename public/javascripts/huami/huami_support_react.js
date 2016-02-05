/**
 * Created by hongbotian on 1/15/16.
 */
'use strict';

var ReactRouter = window.ReactRouter;
var SupportRouter = ReactRouter.Router;

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

/*
const supportRoutes = {
    path: '/',
    component: ContentSelector,
    indexRoute: { component: ProfileSelector },
    childRoutes: [
        //side menu
        { path: supportSideMenuItems[0].path, component: supportSideMenuItems[0].reactComponent},
        { path: supportSideMenuItems[1].path, component: supportSideMenuItems[1].reactComponent},
        { path: supportSideMenuItems[2].path, component: supportSideMenuItems[2].reactComponent},
        { path: supportSideMenuItems[3].path, component: supportSideMenuItems[3].reactComponent},
        { path: supportSideMenuItems[4].path, component: supportSideMenuItems[4].reactComponent},

        //top nav
        { path: "profile", component: ProfileSelector},
        { path: "postarticle", component: PostArticleSelector},

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
//ReactDOM.render(<App />, document.getElementById('huami_support'));