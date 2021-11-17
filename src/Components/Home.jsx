import React from 'react';
import axios from 'axios';
import Wallpaper from './Wallpaper';
import QuickSeach from './QuickSearch';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            quickSearchItems: []
        }
    }

    componentDidMount() {
        sessionStorage.clear();
        axios({
            url: 'http://localhost:6503/api/cityList',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                this.setState({ locations: res.data.city })
            })
            .catch()

        axios({
            url: 'http://localhost:6503/api/mealtype',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                this.setState({ quickSearchItems: res.data.mealtype })
            })
            .catch()
    }

    render() {
        const { locations, quickSearchItems } = this.state;
        return (
            <div>
                <Wallpaper locationsData={locations} />
                <QuickSeach quickSearchItemsData={quickSearchItems} />
            </div>
        )
    }
}

export default Home;