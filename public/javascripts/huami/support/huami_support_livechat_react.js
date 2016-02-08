/**
 * Created by hongbotian on 1/18/16.
 */

var SupportLivechatSelector = React.createClass({
    render: function() {
        return <div className="box box-danger direct-chat direct-chat-danger">
            <div className="box-header with-border">
                <h3 className="box-title">Direct Chat</h3>
                <div className="box-tools pull-right">
                    <span data-toggle="tooltip" title="3 New Messages" className="badge bg-red">3</span>
                    <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle"><i className="fa fa-comments"></i></button>
                    <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                </div>
            </div>
            <div className="box-body">
                <div className="direct-chat-messages">

                    <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                            <span className="direct-chat-name pull-left">Alexander Pierce</span>
                            <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                        </div>

                        <img className="direct-chat-img" src="libs/AdminLTE/dist/img/user1-128x128.jpg" alt="message user image" />
                        <div className="direct-chat-text">
                            Is this template really for free? That's unbelievable!
                        </div>
                    </div>


                    <div className="direct-chat-msg right">
                        <div className="direct-chat-info clearfix">
                            <span className="direct-chat-name pull-right">Sarah Bullock</span>
                            <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                        </div>
                        <img className="direct-chat-img" src="libs/AdminLTE/dist/img/user3-128x128.jpg" alt="message user image" />
                        <div className="direct-chat-text">
                            You better believe it!
                        </div>
                    </div>
                </div>


                <div className="direct-chat-contacts">
                    <ul className="contacts-list">
                        <li>
                            <a href="#">
                                <img className="contacts-list-img" src="libs/AdminLTE/dist/img/user1-128x128.jpg" alt="Contact Avatar" />
                                <div className="contacts-list-info">
                                    <span className="contacts-list-name">Count Dracula
                                        <small className="contacts-list-date pull-right">2/28/2015</small></span>
                                    <span className="contacts-list-msg">How have you been? I was...</span>
                                </div>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box-footer">
                <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-danger btn-flat">Send</button>
                        </span>
                </div>
            </div>
        </div>
    }

});

window.SupportLivechatSelector = SupportLivechatSelector;
