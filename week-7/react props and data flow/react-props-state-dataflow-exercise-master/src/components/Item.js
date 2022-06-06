import React, { Component } from 'react';

class Item extends Component {
    render() {

        const {price,discount,item} = this.props.item
        return <div>{item} : ${this.props.shouldDiscount ? price * (1 - discount) : price}</div>
    }
}

export default Item