import React, { Component } from 'react';


class Flat extends Component {
    render() {
        const flat = this.props.flat;
        const url = flat.imageUrl
        const styles = {
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(" + url + ")"
        };
        console.log(styles)
        return (
          <div
            className="card" style={styles}
          >
            <div className="card-category">{flat.price} {flat.priceCurrency}</div>
            <div className="card-description">
              <h2>{flat.name}</h2>
            </div>
            <a className="card-link" href="#"></a>
          </div>
        );
    }
}

export default Flat;
  