'use strict';

var LoginSelector = React.createClass({
    signIn: function () {

        //TODO for demo
        var email = this.email.value.trim();
        var password = this.password.value.trim();
        console.log(email);
        console.log(password);

        window.location.href = '/admin';
        return;


        if (!password || !email) {
            return;
        }
        //send to server
        $.post('/api/signIn', {email: email, password: password}, function (data) {
            if (data.code === '8000') {
                window.location.href = '/signup';
            }
        }.bind(this));
    },
    render: function () {
        return <article className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="/"><b>Huami Inc.</b></a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="/signin" method="post">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" id='name' name='name' ref={(ref)=>this.userName=ref} placeholder="Full name" />
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" id='pass' name='pass' ref={(ref)=>this.password=ref} placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
                            Google+</a>
                    </div>

                    <a href="#">I forgot my password</a><br />
                    <a href="register.html" className="text-center">Register a new membership</a>

                </div>
            </div>
        </article>
    }
});

ReactDOM.render(<LoginSelector />, document.getElementById('content'));
