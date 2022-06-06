import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
    let image = this.state.currentImg;
    if(image > 0){
      image = image - 1;
    }
    this.setState({currentImg:image})
  }
  shiftImageForward = () => {
    // shiftImageForward - this should increase currentImg by 1
    let image = this.state.currentImg;
    if(image < 2){
      image = image + 1;
    }
   
    this.setState({currentImg:image})
  }

  render() {
    return (
      <div >
        <button onClick={this.shiftImageBack}>Previous</button>
        <img src={this.state.images[this.state.currentImg]}></img>
        <button onClick={this.shiftImageForward}>Next</button>
      
      </div>
    );
  }
}

export default Exercise1;
