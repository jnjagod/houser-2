import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCost, clear } from '../../ducks/reducer'

class Step3 extends Component {
  constructor() {
    super()
    this.state = {
      mortgage: 0,
      rent: 0
    }
  }

  componentDidMount() {
    const { mortgage, rent } = this.props
    this.setState({ mortgage, rent })
  }

  addHouse = () => {
    const { name, address, city, state, zip, img } = this.props
    const house = { name, address, city, state, zip, img, ...this.state }
    axios
      .post('/api/houses', house)
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
      <div>
        <p>Recommended Rent: {this.state.mortgage * 1.25} </p>
        <p>Monthly Mortgage Amount:</p>
        <input autoComplete='off' name='mortgage' type="text" value={this.state.mortgage} onChange={this.handleChange} />
        <p>Desired Monthly Rent:</p>
        <input autoComplete='off' name='rent' type="text" value={this.state.rent} onChange={this.handleChange} />
        <Link to='/wizard/step2'>
          <button onClick={() => this.props.updateCost(this.state)} >Previous</button>
        </Link>
        <button onClick={() => {this.addHouse(); this.props.clear()}} >Complete</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { updateCost, clear })(Step3)
