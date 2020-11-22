import React from 'react';
import {Redirect} from 'react-router-dom';
import { Card, CardGroup, Image, roundedCircle, Container, Row, Col  } from 'react-bootstrap';
class Search extends React.Component {
    constructor(props) {
        super();
        this.temp_query = "";
        this.state = {
            places: props.places,
            search_query: ""
        }
    }
    createTable = () => {
        let table = [];
        for (let i = 0; i < this.state.places.length; i++) {
            let curr = this.state.places[i];
            table.push(<tr>
                <p>{curr.name}</p><p>Type: {curr.type}</p><p>Delivery: {curr.hasDelivery}</p> <p>Takeout: {curr.hasTakeOut}</p>
            <p>{curr.address}</p> <p>{curr.phoneNum}</p><br/>
            </tr>)
          }
          return table
    }

    onChange = (event) => {
        //console.log(this.props);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.temp_query = value
    }

    fetchPlace = (name) => {
        for(let i=0; i< this.state.places.length;i++) {
            let curr = this.state.places[i];
            if(curr.name.toLowerCase().includes(name.toLowerCase())) {
                return (
                    <div className="resultPlace">
                                <Card style={{ width: '18rem' }} back>
                                    <Card.Body>
                                    <Image className="foodThumb"src={curr.thumb} roundedCircle />
                                    <br />
                                    <Card.Title>{curr.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Type: {curr.type}</Card.Subtitle>
                                    <Card.Text>
                                        Delivery: {curr.hasDelivery}
                                    </Card.Text>
                                    <Card.Text>
                                        Takeout: {curr.hasTakeOut}
                                    </Card.Text>
                                    <Card.Link href="#">{curr.address}</Card.Link>
                                    <br />
                                    <Card.Link href="#">{curr.phoneNum}</Card.Link>
                                    </Card.Body>
                                </Card>               
                    </div>
                    
                )
            }
        }
        return <div>Not Found</div>;
    }

    fetchFivePlaces = () => {
        if(this.props.places.length >= 4) {
            let apple = this.props.places[0];
            let taco = this.props.places[1];
            let wildcat = this.props.places[2];
            let lair = this.props.places[3];
            return (
                <div id="defaultPlaces">
                    <br />
                    <h1 className="sep">Nearby Places</h1>
                <Container>
                    <Row>
                    <Col>
                <Card style={{ width: '18rem' }} back>
                    <Card.Body>
                        <Image className="foodThumb"src={apple.thumb} roundedCircle />
                        <br />
                        <Card.Title>{apple.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Type: {apple.type}</Card.Subtitle>
                        <Card.Text>
                            Delivery: {apple.hasDelivery}
                        </Card.Text>
                        <Card.Text>
                            Takeout: {apple.hasTakeOut}
                        </Card.Text>
                        <Card.Link href="#">{apple.address}</Card.Link>
                        <br />
                        <Card.Link href="#">{apple.phoneNum}</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }} back>
                    <Card.Body>
                        <Image className="foodThumb"src={taco.thumb} roundedCircle />
                        <br />
                        <Card.Title>{taco.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Type: {taco.type}</Card.Subtitle>
                        <Card.Text>
                            Delivery: {taco.hasDelivery}
                        </Card.Text>
                        <Card.Text>
                            Takeout: {taco.hasTakeOut}
                        </Card.Text>
                        <Card.Link href="#">{taco.address}</Card.Link>
                        <br />
                        <Card.Link href="#">{taco.phoneNum}</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }} back>
                    <Card.Body>
                        <Image className="foodThumb"src={lair.thumb} roundedCircle />
                        <br />
                        <Card.Title>{lair.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Type: {lair.type}</Card.Subtitle>
                        <Card.Text>
                            Delivery: {lair.hasDelivery}
                        </Card.Text>
                        <Card.Text>
                            Takeout: {lair.hasTakeOut}
                        </Card.Text>
                        <Card.Link href="#">{lair.address}</Card.Link>
                        <br />
                        <Card.Link href="#">{lair.phoneNum}</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                    </Row>
                </Container>
                <br />
            </div>
            )
        } else {
            return (<div>No Places</div>);
        }
    }

    onSubmit = (event) => {
        this.setState({search_query: this.temp_query});
        this.temp_query = "";
        event.preventDefault();
    }

    render () {
        console.log("QUERY: " + this.state.search_query)
        return (
            <div>
                <form id="searchForm" onSubmit={this.onSubmit}>
                <label htmlFor="search">Search A Place: </label>
                <input id="placeSearchBox" type="text" name="search_query" onChange={this.onChange}></input>
                <button type="submit">Search</button>
            </form>
            {(this.state.search_query === "") ? this.fetchFivePlaces() : this.fetchPlace(this.state.search_query)}
            </div>
        )
    }
}
export default Search;