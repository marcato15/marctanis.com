import React, { Component } from 'react'
import Sticky from 'react-stickynode'

const stickyProvider = Comp =>
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        sticky: false,
      }
    }

    handleStateChange(data) {
      this.setState({ sticky: data.status === 2 })
    }

    render() {
      console.log('STICKY', this.state.sticky)
      return (
        <Sticky
          enableTransforms={false}
          onStateChange={data => this.handleStateChange(data)}
          innerZ={10}
        >
          <Comp sticky={this.state.sticky} {...this.props} />
        </Sticky>
      )
    }
  }

export default stickyProvider
