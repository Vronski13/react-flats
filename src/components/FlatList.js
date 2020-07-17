import React, { Component } from 'react';
import "../../assets/stylesheets/application.scss";
import Flat from "./Flat"

class FlatList extends Component {
    render() {
        return (
            <div className="flat-list">
               <Flat />
            </div>
        );
    }
}

export default FlatList;