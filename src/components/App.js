import React, { Component } from 'react';
import FlatList from './FlatList';
import Map from "./Map";
import "../../assets/stylesheets/application.scss";
import flats from "../../data/flats"

class App extends Component {
    render() {
        const allflats = flats
        return (
          <div>
            <FlatList flats = {allflats}/>
            <Map flats = {allflats}/>
          </div>
        );
    }
}

export default App;