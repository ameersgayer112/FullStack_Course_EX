import React, { Component } from 'react';
import Contact from './Contact'

class List extends Component {
  //should recieve the prop "contact"
  render() {
    
    return (
      <div >
        
        {/* Should render an array of Contact components , with the prop "name"*/}
        {this.props.contacts.map(c=> { return <div>
          <Contact name={c} displayConvo={this.props.displayConvo} />
        </div>})}
      </div>
    );
  }
}

export default List;
