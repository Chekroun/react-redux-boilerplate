import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText, incrementCounter, decrementCounter } from '../../redux/actions/ui';
import App from './App';

class AppContainer extends Component {
  onButtonClick = () => {
    this.props.updateText(true);
  }
  render() {
    return (
      <div>
        <App
          onButtonClick={this.onButtonClick}
          onIncrement={this.props.incrementCounter}
          onDecrement={this.props.decrementCounter}
          counter={this.props.ui.counter}
        />
      </div>
    );
  }
}
// map STORE to props
const mapStateToProps = (state) => {
  return {
    ui: state.get('ui'),
  };
};

// Map actions to props
const mapDispatchToProps = {
  updateText,
  incrementCounter,
  decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
