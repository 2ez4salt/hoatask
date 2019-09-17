import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';



export class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Footer>
            <FooterTab>
              <Button>
                <Text>Talha Salt</Text>
              </Button>
              <Button>
                <Text></Text>
              </Button>
              <Button>
                <Text>Umarım kabul edersiniz :)</Text>
              </Button>
                        {/* Bir temenni  */}
            </FooterTab>
          </Footer>
        );
    }
}

export default FooterComponent;