import React from 'react';
import {Redirect} from 'react-router-dom';
class Search extends React.Component {
    constructor(props) {
        super();
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
        const value = event.target.value;
        
    }

    render () {
        return (
            <div>
                <form id="searchForm" onSubmit={this.onSubmit}>
                <label htmlFor="search">Search A Place: </label>
                <input type="text" name="search" onChange={this.onChange}></input>
                <button type="submit">Search</button>
            </form>
            {this.createTable()}
            </div>
        )
    }
}
export default Search;