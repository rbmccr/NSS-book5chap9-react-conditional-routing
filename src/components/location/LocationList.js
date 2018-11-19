import React, { Component } from 'react'

class LocationList extends Component {
  render() {
    return (
      <section className="locations list">
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}
              <p>{location.address}</p>
            </div>
          )
        }
      </section>
    )
  }
}

export default LocationList