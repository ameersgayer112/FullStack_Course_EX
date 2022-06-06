import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"

  resetConvo = () => {
    this.props.resetConvo()
  }



  render() {
    return (
      <div >
         <button className="back" onClick={this.resetConvo}>Back</button>
        {this.props.convo.map((c, i) => {
          return (<div key={i}><span className="sender">
            {c.sender === 'self' ? 'Me' : this.props.sender}:</span>
            <span>{c.text}</span>
          </div>)
        })}

        </div>
       
    );
  }
}

export default Conversation;
