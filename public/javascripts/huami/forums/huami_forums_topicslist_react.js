/**
 * Created by hongbotian on 1/26/16.
 */


var ForumsTopicsList = React.createClass({

    render: function() {

        //var uri = "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312";
        var host = "#/forums/api/v1/topic/";
        var title = this.props.title;
        var topics = this.props.topics.data;
        var lis = topics.map(function (topic){
            var uri = host + topic.id;
            return (
                <tr key={topic.id}>
                    <td>{topic.author.loginname}</td>
                    <td>{topic.reply_count}/{topic.visit_count}</td>

                    <td><a href={uri}>{topic.title}</a></td>
                    <td>{topic.last_reply_at.substring(0,10)}</td>
                    <td>{topic.create_at.substring(0,10)}</td>
                </tr>
            )
        });

        var divStyle = {width: 200}; //React automatically appends the string "px" for you after your number value.

        var style="width: 150px;";

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box">

                        <div className="box-header">
                            <h3 className="box-title">Searching function is coming soon:)</h3>

                            <div className="box-tools">
                                <div className="input-group input-group-sm" style={divStyle} >
                                    <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
                                    <div className="input-group-btn">
                                        <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-body table-responsive no-padding">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Replies/Views</th>
                                    <th>Title</th>
                                    <th>Last Reply At</th>
                                    <th>Created At</th>
                                </tr>
                                </thead>
                                <tbody>
                                {lis}
                                </tbody>
                            </table>
                        </div>

                        <div className="box-footer clearfix">
                            <ul className="pagination pagination-sm no-margin pull-right">
                                <li><a href="#">&laquo;</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">&raquo;</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});

var ForumsAnnouncement = React.createClass({
    getInitialState: function() {
        return {
            topics: {
                "data": [

                ]
            }
        };
    },

    componentDidMount: function() {
        var path = this.props.location.pathname; //'/announcement'

        $.get("https://cnodejs.org/api/v1/topics?tab=good", function(result) {
            if(this.isMounted()) {
                this.setState({topics: result});
            }
        }.bind(this));
    },


    render: function() {
        return <ForumsTopicsList topics={this.state.topics} title={this.props.location.pathname} />
    }
});

var ForumsShouhuan = React.createClass({
    getInitialState: function() {
        return {
            topics: {
                "data": [

                ]
            }
        };
    },

    componentDidMount: function() {
        var path = this.props.location.pathname; //'/shouhuan'

        $.get("https://cnodejs.org/api/v1/topics?tab=ask", function(result) {
            if(this.isMounted()) {
                this.setState({topics: result});
            }
        }.bind(this));
    },


    render: function() {
        return <ForumsTopicsList topics={this.state.topics}  title={this.props.location.pathname} />
    }
});

var ForumsScale = React.createClass({
    getInitialState: function() {
        return {
            topics: {
                "data": [
                    /*{
                     "id": "55c5f41139273b92193362fb",
                     "author_id": "504c28a2e2b845157708cb61",
                     "tab": "share",
                     "content": "<div class=\"markdown-text\"><h2>维护中的客户端</h2>\n<p>from <a href=\"/user/ilanceli\">@ilanceli</a> 《CNode 官方客户端》 <a href=\"https://github.com/lanceli/cnodejs-ionic\">https://github.com/lanceli/cnodejs-ionic</a></p>\n<p>from <a href=\"/user/TakWolf\">@TakWolf</a> 《【CNode Material Design】 Android原生第三方客户端》<a href=\"https://github.com/TakWolf/CNode-Material-Design\">https://github.com/TakWolf/CNode-Material-Design</a></p>\n<p>from <a href=\"/user/soliury\">@soliury</a> 《React-Native 客户端【v1.0.0-alpha】【RN + Redux】【求issue】》 <a href=\"https://github.com/soliury/noder-react-native\">https://github.com/soliury/noder-react-native</a></p>\n<p>from <a href=\"/user/shinygang\">@shinygang</a> 《用Vue.js编写了cnodejs.org的h5客户端(webapp)》 <a href=\"https://github.com/shinygang/Vue-cnodejs\">https://github.com/shinygang/Vue-cnodejs</a></p>\n<p>from <a href=\"/user/klesh\">@klesh</a> 《CNode.js Swift for iOS 发布》 <a href=\"https://cnodejs.org/topic/5698c285e5c79df62a37a13b\">https://cnodejs.org/topic/5698c285e5c79df62a37a13b</a></p>\n</div>",
                     "title": "CNode客户端专题",
                     "last_reply_at": "2016-01-25T13:57:11.903Z",
                     "good": false,
                     "top": true,
                     "reply_count": 91,
                     "visit_count": 22331,
                     "create_at": "2015-08-08T12:20:33.565Z",
                     "author":
                     {
                     "loginname": "alsotang",
                     "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                     },
                     }*/
                ]
            }
        };
    },

    componentDidMount: function() {
        var path = this.props.location.pathname; //'/scale'

        $.get("https://cnodejs.org/api/v1/topics?tab=job", function(result) {
            if(this.isMounted()) {
                this.setState({topics: result});
            }
        }.bind(this));
    },


    render: function() {
        return <ForumsTopicsList topics={this.state.topics}  title={this.props.location.pathname} />
    }
});

window.ForumsAnnouncement = ForumsAnnouncement;
window.ForumsShouhuan = ForumsShouhuan;
window.ForumsScale = ForumsScale;