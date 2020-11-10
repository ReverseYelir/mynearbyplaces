import React, { useState } from 'react';
import Login from './Login';
import { Link, Redirect } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
            authenticated:false,
            username: "",
            entries : [],
            cursor: 0, // current index in list of quizzes 
            search: ""
        };
    }

    login = () => {
        this.setState({
            loggedIn: true
        });
    }

    body = () => {
        return(
            <div className="content">
                
            </div>
        )
    }

    setUsername = (target) => {
        console.log(target)
    }

    // componentDidMount() {
    //     const entries = server.fetchEntries();
    //     this.setState(
    //         {
    //             entries : entries
    //         }
    //     )
    // }
    
    render () {
        return (
            <div>
                <div id="navigation-bar">
                    <div className="username">
                        {this.state.username.length > 0 ? <div className="username">{this.state.username}</div> : <Login data={{setUsername: this.setUsername.bind(this)}}/>}
                    </div>
                </div>
                <form>
                <label htmlFor="search">Search for a Place: </label>
                <input type="text" name="search" value={this.state.search}></input>
                <button type="submit">Login</button>
            </form>
            </div>
        );
    }
}
export default Home;