import React from 'react';
import Login from "./Login";
import Search from './Search';
import { Link, Redirect } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
            authenticated:false,
            username: "",
            places : [
                {
                    name: "Applebee's Grill + Bar",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "5870 East Broadway",
                    phoneNum: "(520) 750-9780",
                    type: "American, Sports Bar"
                },
                {
                    name: "Joey's Taco Shop",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "123 South Campbell",
                    phoneNum: "(520) 125-1538",
                    type: "Mexican, Small Plates"
                },
                {
                    name: "Wildcat Kitchen",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "1658 N Cherry Ave",
                    phoneNum: "(520) 986-8943",
                    type: "Variety, Grill"
                },
                {
                    name: "Roger's Lair",
                    hasDelivery: "Yes",
                    hasTakeOut: "Yes",
                    address: "123 S Kent St",
                    phoneNum: "(520) 712-7649",
                    type: "BBQ, American"
                }
            ],
            cursor: 0 // current index in list of quizzes 
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
                <Link to={{pathname:'/add', state: {places: this.state.places}}}>Add a Place</Link><br/>
                <Link to={{pathname:'/delete', state: {places: this.state.places}}}>Delete a Place</Link><br/>
                <Link to={{pathname:'/search', state: {places: this.state.places}}}>Find a Place</Link><br/>
            </div>
        )
    }
    
    nav = () => {
        return (
            <div>
            <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                {this.body()}
            </ul>
            <span className="username"></span>{"Welcome, " + this.state.username}
            </nav>
            
            </div>
        )
    }

    render () {
        if(this.props.location) {
            if(this.props.location.state) {
                if(this.props.location.state.username && this.state.username <= 0) {
                    this.setState(
                        {
                            username: this.props.location.state.username,
                            authenticated: this.props.location.state.authenticated
                        }
                    )
                }
            }
        }

        return(
            <div>
                <div id="navigation-bar">
                    <div className="username">
                        {this.state.username.length > 0 ? <div className="username">{this.nav()}</div> : <Login />}
                    </div>
                </div>
                <body className='body'>
                    <Search places={this.state.places}/>
                </body>
            </div>
        
        )
        
    }
}
export default Home;