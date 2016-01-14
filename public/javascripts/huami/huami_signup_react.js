/**
 * Created by hongbotian on 1/8/16.
 */


var Signup = React.createClass({
    render: function() {
        return (
            <div id='content'>
                <div class='panel'>
                    <div class='header'>
                        <ul class='breadcrumb'>
                            <li><a href='/'>Home</a><span class='divider'>/</span></li>
                            <li class='active'>Registration</li>
                        </ul>
                    </div>
                    <div class='inner'>
                        <form id='signup_form' class='form-horizontal' action='/signup' method='post'>
                            <div class='control-group'>
                                <label class='control-label' for='loginname'>Username</label>

                                <div class='controls'>

                                    <input class='input-xlarge' id='loginname' name='loginname' size='30' type='text' value='' />
                                </div>
                            </div>
                            <div class='control-group'>
                                <label class='control-label' for='pass'>Password</label>

                                <div class='controls'>
                                    <input class='input-xlarge' id='pass' name='pass' size='30' type='password' />
                                </div>
                            </div>
                            <div class='control-group'>
                                <label class='control-label' for='re_pass'>Confirm Password</label>

                                <div class='controls'>
                                    <input class='input-xlarge' id='re_pass' name='re_pass' size='30' type='password'/>
                                </div>
                            </div>
                            <div class='control-group'>
                                <label class='control-label' for='email'>e-mail</label>

                                <div class='controls'>

                                    <input class='input-xlarge' id='email' name='email' size='30' type='text'/>
                                </div>
                            </div>

                            <div class='form-actions'>
                                <input type='submit' class='span-primary' value='Submit'/>
                                <a href="/auth/github">
                                    <span class="span-info">
                                        Login with GitHub account
                                    </span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Signup />,
    document.getElementById('huami_signup')
);
