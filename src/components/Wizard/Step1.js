import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateLocation } from '../../ducks/reducer'

class Step1 extends Component {
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

  componentDidMount() {
    const { name, address, city, state, zip } = this.props
    this.setState({ name, address, city, state, zip })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <div className="input-container">
          <p>Property Name</p>
          <input value={this.state.name} autoComplete='off' name='name' type="text" onChange={this.handleChange} />
          <p>Address</p>
          <input value={this.state.address} autoComplete='off' name='address' type="text" onChange={this.handleChange} />
          <p>City</p>
          <input value={this.state.city} autoComplete='off' name='city' type="text" onChange={this.handleChange} />
          <p>State</p>
          <input value={this.state.state} autoComplete='off' name='state' type="text" onChange={this.handleChange} />
          <p>Zip</p>
          <input value={this.state.zip} autoComplete='off' name='zip' type="number" onChange={this.handleChange} />
        </div>
        <Link to='/wizard/step2'>
          <button onClick={() => this.props.updateLocation(this.state)}>Next</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { name, address, city, state, zip } = reduxState
  return { name, address, city, state, zip }
}

export default connect(mapStateToProps, { updateLocation })(Step1)