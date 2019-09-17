import React, { Component } from 'react';
import { Header } from 'react-native-elements';



export class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Header centerComponent={{ text: 'House Of Apps Challenge', style: { color: '#fff' } }}/>          
        );
    }
}

export default HeaderComponent;