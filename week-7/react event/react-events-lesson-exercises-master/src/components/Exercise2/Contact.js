import React, { Component } from 'react';

class Contact extends Component {


  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }

  render() {
    return (
      <div key={this.props.name} onClick={this.displayConvo}>
        {/* should render a "name" recieved in props */}
        {this.props.name} 
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
