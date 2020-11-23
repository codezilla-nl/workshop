import React from 'react';

export default class LikeButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = { counter: 0};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component updated and has re-rendered');
  }

  render() {
    const { color = 'red' } = this.props;
    const { counter } = this.state;

    return (
      <button
        onClick={this.onClickHandler}
      >
        I like the color: {color} <br/>
        👍 {counter}
      </button>
    );
  }
};
