/**
 * Created by hongbotian on 1/8/16.
 */
'use strict';

var SignUpSelector = React.createClass({
    signUp: function () {

        //TODO for demo
        var userName=this.userName.value.trim();
        var email=this.email.value.trim();
        var password=this.password.value.trim();
        var confirmedPassword=this.confirmedPassword.value.trim();
        console.log(userName);
        console.log(email);
        console.log(password);
        console.log(confirmedPassword);

        window.location.href = '/login';
        return;

        if (!password || !email) {
            return;
        }
        //send to server
        $.post('/api/signIn', {email: email, password: password}, function (data) {
            if (data.code === '8000') {
                window.location.href = '/amdin';
            }
        }.bind(this));
    },
    render: function () {
        return <article className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href="/huami-forums"><b>Humai Inc.</b></a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form action="/huami-signup" method="post">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" id='loginname' name='loginname' ref={(ref)=>this.userName=ref} placeholder="Full name" />
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" id='email' name='email' ref={(ref)=>this.email=ref} placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" id='pass' name='pass' ref={(ref)=>this.password=ref} placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" id='re_pass' name='re_pass' ref={(ref)=>this.confirmedPassword=ref} placeholder="Retype password" />
                            <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
                            Google+</a>
                    </div>

                    <a href="login.html" className="text-center">I already have a membership</a>
                </div>
            </div>
        </article>
    }
});

ReactDOM.render(<SignUpSelector />, document.getElementById('content'));

