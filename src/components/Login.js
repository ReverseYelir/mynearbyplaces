import React from 'react';
import {Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            authenticated: false
        };
    }

    onLogin = () => {
        if(this.state.authenticated) {
            
        }
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState(
            {
                username:value
            }
        )
    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0) {
            this.setState(
                {
                    authenticated:true
                }
            );
        }
    }

    render () {
        let from = {pathname:'/', state: {username: this.state.username, authenticated:this.authenticated}};
        if(this.state.authenticated) {
            return(
                <Redirect to={from} />
            )
        }
        return(
        <div id="loginForm">
            <form onSubmit={this.onSubmit}>
                <label htmlFor="username">Sign in:</label>
                <input type="text" name="username" value={this.state.username} onChange={this.onChange}></input>
                <button type="submit">Login</button>
            </form>
        </div>
        )
    }
}
export default Login;