'use strict';

//var React = require('react');

var NavigatorItemSelector = React.createClass({

  render: function () {
    var lis = this.props.items.map(function (item) {
      return <li key={item._id}>>
        <a href={"/admin#/timeline/"+item._id}>
          <i className={item.icon}></i> <span>{item.name}</span>
          <small className="label pull-right bg-red">{item.count}</small>
        </a>
      </li>;
    }.bind(this));

    var sideMenuLis = this.props.sideMenuItems.map(function (item) {
      return <li key={item._id}>>
        <a href={"#/"+item.path}>
          <i className={item.icon}></i> <span>{item.name}</span>
          <small className="label pull-right bg-red">{item.count}</small>
        </a>
      </li>;
    }.bind(this));

    return <ul className="sidebar-menu">
      {sideMenuLis}
    </ul>
  }
});

var NavigatorSelector = React.createClass({
  getInitialState: function () {
    return {items: [
        /*
        {
          "_id" : "56177c406a58b7cb3826e1a4",
          "name" : "Frequent Q&A",
          "icon" : "fa fa-question-circle",
          "sort" : 1
        },


        {
          "_id" : "56177c606a58b7cb3826e1a5",
          "name" : "Download",
          "icon" : "fa fa-download",
          "sort" : 1
        }
        */
    ]};
  },
  componentDidMount: function () {
    this.fetchData();
  },
  fetchData: function () {
    $.get('/api/getCategory').then(function (category) {
      //get count
      $.get('/api/getArticleCount').then(function (article) {
        _.forEach(category.data, function (cate) {
          _.forEach(article.data, function (art) {
            if (cate._id === art._id) {
              cate.count = art.count;
            }
          });
        });

        this.setState({items: category.data});
      }.bind(this));
//        this.setState({items: category.data});
    }.bind(this));
  },
  render: function () {
    return <NavigatorItemSelector items={this.state.items} sideMenuItems={this.props.sideMenuItems} />
  }
});

var SideBarSelector = React.createClass({
  render: function () {

    return <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="/public/images/i64X64.ico" className="img-circle" alt="User Image"/>
          </div>
          <div className="pull-left info">
            <p>Mike Lee</p>
            <a href="https://github.com/tianhongbo"><i className="fa fa-circle text-success"></i>Fork me on Github</a>
          </div>
        </div>
        <NavigatorSelector sideMenuItems={this.props.sideMenuItems} />
      </section>
    </aside>
  }
});

//  component.NavigatorSelector = NavigatorSelector;
//  component.SideBarSelector = SideBarSelector;
/*
  NavigatorSelector: NavigatorSelector,
  SideBarSelector: SideBarSelector
};
    */

window.SideBarSelector = SideBarSelector;