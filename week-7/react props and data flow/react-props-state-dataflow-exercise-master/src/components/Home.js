import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.store.map((item, index) => {
            return  <Item key={index} item={item} shouldDiscount={this.props.shouldDiscount}/>
        }
       )
    }
}

export default Home