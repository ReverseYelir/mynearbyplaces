import React from 'react';
import {Redirect} from 'react-router-dom';
class Add extends React.Component {
    constructor(props) {
        super();
        this.state = {
            places: [],
            name: "",
            type: "",
            hasDelivery:"Yes",
            hasTakeout: "Yes",
            address: "",
            phoneNum: ""
        }
    }

    setPlaces = () => {
        if(this.props.location) {
            if(this.props.location.state) {
                this.setState({places:this.props.location.state.places})
            }
        }
        console.log(this.state)
    }

    onChangeName = (event) => {
        event.persist();
        const value = event.target.value;
        this.setState(prevState => ({
            "name" : value
          }))
    }

    onSubmit = (event) => {
        let newPlace = this.createPlace();
        let newPlaces = this.state.places;
        newPlaces.push(newPlace);
        <Redirect to={{pathname:"/", state: {places: newPlaces, props: this.props}}} />
    }

    createPlace = () => {
        let place = {
            name: this.state.name,
            type: this.state.type,
            hasDelivery: this.state.hasDelivery,
            hasTakeout: this.state.hasTakeout,
            address: this.state.address,
            phoneNum: this.state.phoneNum
        }
        return place
    }
    render () {
        if(this.state.places.length === 0) {
            this.setPlaces();
        }
        if(this.state.name !== "") {
            return this.state.name
        }
        return(
        <div id="addForm">
            <div>
                
            </div>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="username">Name: </label>
                <input type="text" name="name"  onChange={this.onChangeName}></input>
                <label htmlFor="username">Type: </label>
                <input type="text" name="type" onChange={this.onChangeType}></input>
                <label htmlFor="delivery">Has Delivery: </label>
                <input type="text" name="delivery" onChange={this.onChangeDelivery}></input>
                <label htmlFor="takeout">Has Takeout: </label>
                <input type="text" name="takeout" onChange={this.onChangeTakeout}></input>
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" onChange={this.onChangeAddress}></input>
                <label htmlFor="phoneNum">Phone Number: </label>
                <input type="text" name="phoneNum" onChange={this.onChangePhoneNum}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}
export default Add;