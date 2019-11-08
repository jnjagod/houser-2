import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
  }

  addHouse = () => {
    axios
      .post('/api/houses', this.state)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='wiz panel'>
        <div className='sub-header'>
          <h2>Add New Listing</h2>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
        </div>
        <div className="input-container">
          <p>Property Name</p>
          <input autoComplete='off' name='name' type="text" onChange={this.handleChange} />
          <p>Address</p>
          <input autoComplete='off' name='address' type="text" onChange={this.handleChange} />
          <p>City</p>
          <input autoComplete='off' name='city' type="text" onChange={this.handleChange} />
          <p>State</p>
          <input autoComplete='off' name='state' type="text" onChange={this.handleChange} />
          <p>Zip</p>
          <input autoComplete='off' name='zip' type="number" onChange={this.handleChange} />
        </div>
        <button onClick={this.addHouse} >Complete</button>
      </div>
    )
  }
}