/**
 * Created by hongbotian on 1/26/16.
 */


var ForumsTopicDetail = React.createClass({
    getInitialState: function () {
        return {
            topic: {
                "data":
                    { /*
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
                        "replies": [
                            {
                                "id": "5433d866e737cbe96dcef313",
                                "author":
                                {
                                    "loginname": "leapon",
                                    "avatar_url": "https://avatars.githubusercontent.com/u/4295945?v=3&s=120"
                                },
                                "content": "<div class=\"markdown-text\"><p>我喜欢你的写作风格</p>\n</div>",
                                "ups":
                                    [
                                        "5404a4120256839f712590f3",
                                        "50f3b267df9e9fcc58452224"
                                    ],
                                "create_at": "2014-10-07T12:11:18.981Z"
                            },
                            {
                                "id": "5433e51ce737cbe96dcef315",
                                "author":
                                {
                                    "loginname": "alsotang",
                                    "avatar_url": "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                                },
                                "content": "<div class=\"markdown-text\"><p>[[[<a href=\"/user/leapon\">@leapon</a>](/user/leapon)](/user/leapon)](/user/leapon) 原来你喜欢扯淡式风格</p>\n</div>",
                                "ups":
                                    [
                                        "50f5a8dadf9e9fcc58635898",
                                        "51ed5627f4963ade0ea60395"
                                    ],
                                "create_at": "2014-10-07T13:05:32.158Z"
                            }
                        ]
                    */}
            }
        };
    },

    componentDidMount: function() {
        var tid = this.props.routeParams.tid;
        //var uri = "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312";
        var uri = "https://cnodejs.org/api/v1/topic/" + tid;
        console.log(uri);

        $.get(uri, function(res) {
            if(this.isMounted()) {
                this.setState({topic: res});
            }
        }.bind(this));
    },

    render: function() {
        var topic = this.state.topic.data;
        var replies = topic.replies;
        if (typeof topic.replies == 'undefined') {
            return <div></div>
        }

        var lis = replies.map(function(reply) {
            return <div className="row" key={reply.id}>
                <div className="col-md-12">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">{reply.author.loginname}</h3>
                            <p>replied at {reply.create_at.substring(0,10)}</p>
                        </div>
                        <div className="box-body">
                            <div dangerouslySetInnerHTML={{__html: reply.content}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });

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
                        </div>
                    </div>
                </div>
            </div>
            {lis}
        </section>
    }
});

window.ForumsTopicDetail = ForumsTopicDetail;