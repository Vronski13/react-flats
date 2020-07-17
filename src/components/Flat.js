import React, { Component } from 'react';


class Flat extends Component {
    render() {
        const flat = this.props.flat;
        return (
          <div
            className="card"
          >
            <div className="card-category">{flat.price} {flat.priceCurrency}</div>
            <div className="card-description">
              <h2>{flat.name}</h2>
            </div>
            <a className="card-link" href={flat.imageUrl}></a>
          </div>
        );
    }
}

export default Flat;