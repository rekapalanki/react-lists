import React from 'react'

class BindThis extends React.Component {
  constructor(props) {
    super(props)
    this.clickMe = this.clickMe.bind(this)
  }
  
  clickMe = (a) => {
    alert(`My value is ${a.target.innerText}`)
  }
  
  render() {
    return (
        <div>
        <h1>Click on the buttons below to relieve their values</h1>
        <button onClick={(a) => this.clickMe(a)}>Apple</button>
        <button onClick={this.clickMe.bind(this)}>Banana</button>
        </div>
    )
  }
}

export default BindThis