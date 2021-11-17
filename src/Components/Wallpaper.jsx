import React from 'react';
import '../Styles/home.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurantList: [],
            searchText: undefined,
            suggestions: []
        }
    }

    handleChangeLocation = (event) => {
        const locationId = event.target.value;
        sessionStorage.setItem('locationId', locationId);

        axios({
            url: `https://zmclone-backend.herokuapp.com/api/getRestaurantsbycity/${locationId}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                this.setState({ restaurantList: res.data.restaurantList })
            })
            .catch()
    }

    handleInputChange = (event) => {
        const { restaurantList } = this.state;
        const searchText = event.target.value;

        let searchRestaurants = [];
        if (searchText) {
            searchRestaurants = restaurantList.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        }

        this.setState({ suggestions: searchRestaurants, searchText });
    }

    selectedText = (resObj) => {
        this.props.history.push(`/details?restaurant=${resObj._id}`);
    }

    renderSuggestions = () => {
        const { suggestions, searchText } = this.state;
        console.log(suggestions,"suggest")

        if (suggestions.length === 0 && searchText === "") {
            return <ul >
                <li>No Search Results Found</li>
            </ul>
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{`${item.name} -   ${item.locality},${item.city}`}</li>))
                }
            </ul>
        );
    }

    render() {
        const { locationsData } = this.props;

        return (
            <div>
                <img src="./Assets/homepageimg.png" width="100%" height="450" />
                <div>
                    {/* Adding Logo */}
                    <div className="logo">
                        <p>e!</p>
                    </div>

                    <div className="headings">
                        Find the best restaurants, cafes, bars
                    </div>

                    <div className="locationSelector">
                        <select className="locationDropdown" onChange={this.handleChangeLocation}>
                            <option value="0" >Select</option>
                            {locationsData.map((item, index) => {
                                return <option key={index + 1} value={index} >{`${item.name}, ${item.city}`}</option>
                            })}
                        </select>
                        <div>
                            <span className="glyphicon glyphicon-search search"></span>
                            <div id="notebooks">
                                <input id="query" className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" onChange={this.handleInputChange} />
                                {this.renderSuggestions()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Wallpaper);
