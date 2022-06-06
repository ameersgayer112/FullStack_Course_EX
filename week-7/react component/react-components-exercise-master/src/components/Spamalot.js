import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        let spamArray = []
        for(let i = 0 ; i < 500 ; i++){
            spamArray.push(<Spam/>)
        }
        return spamArray;
    }
}

export default Spamalot

