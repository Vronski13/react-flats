import React, { Component } from 'react';
import FlatList from './FlatList';
import Map from "./Map";
import "../../assets/stylesheets/application.scss";

class App extends Component {
    render() {
        return (
          <div>
            <FlatList />
            <Map />
          </div>
        );
    }
}

export default App;