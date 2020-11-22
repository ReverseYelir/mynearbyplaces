import React from 'react';
import {Redirect} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
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
            phoneNum: "",
            thumb: ""
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
            phoneNum: this.state.phoneNum,
            thumb: this.state.thumb
        }
        return place
    }
    render () {
        console.log("Props")
        console.log(this.props)
        if(this.state.places.length === 0) {
            this.setPlaces();
        }
        if(this.state.name !== "") {
            return this.state.name
        }
        return(
        <div>
            <h1 className="sep">Add a Place</h1>
            <div id="addForm">
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>New Place Name</Form.Label>
                        <Form.Control type="type" placeholder="Ex: Tucker's Chop House" />
                    </Form.Group>

                    <Form.Group controlId="formType">
                        <Form.Label>Place Type</Form.Label>
                        <Form.Control type="type" placeholder="Ex: Chinese, American, Mexican" />
                    </Form.Group>

                    <Form.Group controlId="formDelivery">
                        <Form.Label>Does it have delivery?</Form.Label>
                        <Form.Control type="type" placeholder="No" />
                    </Form.Group>

                    <Form.Group controlId="formTakeout">
                        <Form.Label>Does it have takeout?</Form.Label>
                        <Form.Control type="type" placeholder="No" />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="type" placeholder="Ex: 1234 W Harmony St" />
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="type" placeholder="Ex: 480-123-4567" />
                    </Form.Group>

                    <button type="submit">Add Place</button>
                </Form>
            </div>
        </div>
        )
    }
}
export default Add;