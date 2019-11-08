import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImage } from '../../ducks/reducer'

class Step2 extends Component {
  constructor() {
    super()
    this.state = {
      img: ''
    }
  }

  componentDidMount() {
    const { img } = this.props
    this.setState({ img })
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
        <p>Image URL</p>
        <input autoComplete='off' name='img' type="text" value={this.state.img} onChange={this.handleChange} />
        <Link to='/wizard/step1'>
          <button onClick={() => this.props.updateImage(this.state)} >Previous</button>
        </Link>
        <Link to='/wizard/step3'>
          <button onClick={() => this.props.updateImage(this.state)} >Next</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { img } = state
  return { img }
}

export default connect(mapStateToProps, { updateImage })(Step2)