import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dash extends Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount() {
    this.getHouses()
  }

  getHouses() {
    axios
      .get('/api/houses')
      .then(res => {
        this.setState({ houses: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteHouse(id) {
    axios
      .delete(`/api/houses/${id}`)
      .then(res => this.getHouses())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='panel dash'>
        <div className="sub-header">
          <h2>Dashboard</h2>
          <Link to='/wizard/step1'>
            <button>Add New Property</button>
          </Link>
        </div>
        <div className="prop-container">
          <h3>Home Listings</h3>
          {this.state.houses.map(el => (
            <House key={el.id} house={el} deleteHouse={this.deleteHouse} />
          ))}
        </div>
      </div>
    )
  }
}