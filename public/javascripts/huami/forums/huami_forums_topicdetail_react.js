/**
 * Created by hongbotian on 1/26/16.
 */


var ForumsTopicDetail = React.createClass({
    getInitialState: function () {
        return {
            topic: {
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
                     }
                     }*/
                ]
            }
        };
    },

    componentDidMount: function() {
        var tid = "";
        var uri = "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312";

        $.get(uri, function(res) {
            if(this.isMounted()) {
                this.setState({topic: res});
            }
        }.bind(this));
    },

    render: function() {
        var topic = this.state.topic.data;

        return <section className="content">
            <div className="row">
                <div className="col-md-12">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">{topic.title}</h3>
                            <p>Created at {topic.create_at} By </p>
                        </div>
                        <div className="box-body">
                            <div dangerouslySetInnerHTML={{__html: topic.content}}>
                            </div>
                            {}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">{topic.title}</h3>
                            <p>Created at {topic.create_at} By </p>
                        </div>
                        <div className="box-body">
                            //TODO
                        </div>
                    </div>
                </div>
            </div>

        </section>
    }
});

window.ForumsTopicDetail = ForumsTopicDetail;