import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {emoji: true}

  onEmojiClicked = () => {
    this.setState({emoji: false})
  }

  render() {
    let context = null
    const {emoji} = this.state
    const {resources} = this.props
    const {emojis} = resources
    console.log(resources)
    console.log(emoji)

    if (emoji) {
      context = (
        <div className="emoji-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-item-container">
            {emojis.map(eachItem => (
              <li key={eachItem.id}>
                <button
                  type="button"
                  className="button"
                  onClick={this.onEmojiClicked}
                >
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="emoji-image"
                  />
                  {eachItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      context = (
        <div className="emoji-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
            className="heart-image"
            alt="love emoji"
          />
          <h1 className="thankyou">Thank You</h1>
          <p className="feedback-description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }

    return <div className="app-container">{context}</div>
  }
}
export default Feedback
