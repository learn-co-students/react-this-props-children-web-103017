// Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class SomeComponent extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div>
      );
    });

    return (
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}

ReactDOM.render(
  <SomeComponent />,
  document.getElementById('root')
)
