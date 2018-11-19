import React, {Component} from 'react'
import {connect} from 'react-redux'

class Bubble extends Component {
  constructor(props) {
    super(props)
    this.state = {x: 0, y: 0}
  }

  componentDidMount() {
    this.props.generateRandomCoordinates()
    this.setState({
      x: this.props.xBubble,
      y: this.props.yBubble
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.xBubble !== this.props.xBubble) {
      this.setState({
        x: this.props.xBubble,
        y: this.props.yBubble
      })
    }
  }

  render() {
    return (
      <div className="bubble">
        <img
          src="http://pngimg.com/uploads/cat/cat_PNG132.png"
          width="100"
          style={{
            position: 'absolute',
            bottom: this.state.y,
            left: this.state.x
          }}
        />
      </div>
    )
  }
}

const mapState = state => ({
  xBubble: state.bubble.xCoordinate,
  yBubble: state.bubble.yCoordinate
})

export default connect(mapState)(Bubble)

let startTime = new Date()
let endTime = new Date()
let timeDiff = endTime - startTime
timeDiff /= 1000
