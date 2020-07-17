import React, { Component } from 'react';
import "../../assets/stylesheets/application.scss";
import Flat from "./Flat"

class FlatList extends Component {
    render() {
        const flats = []
        this.props.flats.forEach((flat) => {
           flats.push(
            <Flat flat={flat} key={flat.name}/>
           )
        });
        return (
            <div className="flat-list">
               {flats}
            </div>
        );
    }
}

export default FlatList;