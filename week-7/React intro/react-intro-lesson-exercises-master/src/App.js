import React, { Component } from 'react';
import './App.css';



class App extends Component {
  getStuff() {
    return "Yes We Reacting now ";
  }

  getMorningGreeting() {
    return "Good Morning"
  }

  getEveningGreeting() {
    return "Good Evning"
  }

  showCompany(name, revenue) {
    
    return <h3>{name} makes {revenue} every year </h3>
  }

  getClassName(temperature) {
    let className = temperature < 15 ? "freezing" : (temperature < 30 ? "fair" : "hell-scape")
    return <div id="weatherBox" class={className}><h1>The weather is {className}</h1></div>


  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]







    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>{this.getStuff()}</h1>

          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            <h1>{new Date().getHours() > 12 ? this.getEveningGreeting() : this.getMorningGreeting()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>How u doing</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(company => <div id={company.name}>{this.showCompany(company.name,company.revenue)}</div>)}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(35)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
