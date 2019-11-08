import React, { Component } from 'react'

export default class House extends Component {
  render() {
    const { id, name, address, city, state, zip } = this.props.house
    return (
      <div>
        <p>Property Name: {name} </p>
        <p>Address: {address} </p>
        <p>City: {city} </p>
        <p>State: {state} </p>
        <p>Zip: {zip} </p>
        <button onClick={() => this.props.deleteHouse(id)}>X</button>
      </div>
    )
  }
}