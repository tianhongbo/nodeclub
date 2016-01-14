/**
 * Created by hongbotian on 1/8/16.
 */


var HuamiLogin = React.createClass({
    render: function() {
        return (
            <div id='content'>
                <div class='panel'>
                    <div class='header'>
                        <ul class='breadcrumb'>
                            <li><a href='/'>Home</a><span class='divider'>/</span></li>
                            <li class='active'>Login</li>
                        </ul>
                    </div>
                    <div class='inner'>
                        <form id='signin_form' class='form-horizontal' action='/signin' method='post'>
                            <div class='control-group'>
                                <label class='control-label' for='name'>Username</label>

                                <div class='controls'>
                                    <input class='input-xlarge' id='name' name='name' size='30' type='text'/>
                                </div>
                            </div>
                            <div class='control-group'>
                                <label class='control-label' for='pass'>Password</label>

                                <div class='controls'>
                                    <input class='input-xlarge' id='pass' name='pass' size='30' type='password'/>
                                </div>
                            </div>

                            <div class='form-actions'>
                                <input type='submit' class='span-primary' value='Login'/>
                                <a href="/auth/github">
                                    <span class="span-info">Login with GitHub account</span>
                                </a>
                                <a id="forgot_password" href='/search_pass'>Forget password?</a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <HuamiLogin />,
    document.getElementById('huami_login')
);
