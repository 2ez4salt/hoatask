/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {HeaderComponent} from './components/Header';
import {Content} from './components/Content';
import React, {Fragment} from 'react';

import { Container } from 'native-base';
import FooterComponent from './components/Footer';


const App = () => {
  return (
    <Container>
        <HeaderComponent/>
        <Content/>
        <FooterComponent/>
    </Container>
  );
};


export default App;
