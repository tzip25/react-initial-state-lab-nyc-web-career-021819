import React from 'react';

class Bomb extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  increment = () => {
    const newCount = this.state.initialCount - 1
    this.setState({
      secondsLeft: newCount
    })
  }


  render(){
    return <h1>{this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'}</h1>
  }

}

export default Bomb;
