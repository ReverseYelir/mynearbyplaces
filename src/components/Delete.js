import React from 'react';
import Home from './Home';
import {Redirect, Link} from 'react-router-dom';
class Delete extends React.Component {
    constructor(props) {
        super();
        this.state = {
            places: [],
            "name": ""
        }
    }

    setPlaces = () => {
        if(this.props.location) {
            if(this.props.location.state) {
                this.setState({places:this.props.location.state.places})
            }
        }
    }

    onSubmit = (event) => {
        let newPlaces = this.state.places;
        for(let i=0;i<newPlaces.length;i++) {
            let curr = newPlaces[i];
            if(curr.name.includes(this.state.name)) {
                newPlaces.splice(i,1);
            }
        }
        let from = {pathname:'/', state: {places: newPlaces}};
        <Redirect to={from} />
    }

    render () {
        if(this.state.places.length === 0) {
            this.setPlaces();
        }
        if(this.state.name !== "") {
            return this.state.name
        }
        return(
        <div id="delForm">
            <nav className="navbar">
            <ul>
                <Link to={{pathname: "/"}}>Home</Link>
            </ul>
            <span className="username">{this.state.username}</span>
            </nav>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="name">Name of Place to Delete: </label>
                <input type="text" name="name"  onChange={this.onChangeName}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}
export default Delete;