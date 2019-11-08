import React, { Component } from 'react'

export default class House extends Component {
  render() {
    const { id, name, address, city, state, zip, img, mortgage, rent } = this.props.house
    return (
      <div className='house'>
        <img src={img} alt="" />
        <p>Property Name: {name} </p>
        <p>Address: {address} </p>
        <p>City: {city} </p>
        <p>State: {state} </p>
        <p>Zip: {zip} </p>
        <p>Monthly Mortgage: {mortgage} </p>
        <p>Desired Rent: {rent} </p>
        <button className='x' onClick={() => this.props.deleteHouse(id)}>X</button>
      </div>
    )
  }
}