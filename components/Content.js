import React, { Component } from 'react';
import { Text, Button,Input } from 'react-native-elements';
import { Card, CardItem, Container} from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";


export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            summary :'',
            text : '',
            x:'',
            y:'',
            z:'',
            t:'',

        }; 
        //State Tanımlamaları 4 tanesi sayılar için  1 tanesi sonuç , 1 tanesi formül için.
        this.onPressButton = this.onPressButton.bind(this);   
    }
    onPressButton() { // Butona basıldığında triggerlanan fonk.
        formula = this.state.text.toLowerCase(); // formülü küçük harfler ile değeiştirip formula değişkenine ataması
        if(formula.length !== 7) { // Formülde 7 karakterimiz olması gerektiğinden ilk filtrelememizi formüldeki karakter sayısına göre yapıyoruz.
            this.setState({
                summary : "Wrong Input" // Eğer uymaz ise sonuç yok!
            })
        }
        else if(!formula.includes('x') || !formula.includes('y') || !formula.includes('t') || !formula.includes('z')){  // Task kurallarına göre 4 değer(x,y,z,t) de girilmesi gerektiğinden formülde 4 karakterinde varlığı benim 2.filtrelemem oluyor.  
            this.setState({
                summary : "Wrong Input" // Eğer uymaz ise sonuç yok!
            })
        }
    
         else {
            let pattern = /^([.xyzt]) *([-+*\/])\ *([xyzt]) *([-+*\/])\ *([xyzt]) *([-+*\/])\ *([xyzt])$/g // REGEX.
            if (formula.match(pattern)) { // Eğer kullanıcı tarafından yazılan formül pattern'den geçer ise..
                let matched = pattern.exec(formula);
                /*
                Eğer formül buraya kadar gelmiş ise tüm filtrelemleri geçmiş tam istediğimiz formattadır.Eşleşen
                matched'in içeriği. Biz burda ister 0.indexi ister input'u kullanabiliriz.
                ---------------------
                console.log(matched)
                ________________
                0: "x-y*t-z"
                1: "x"
                2: "-"
                3: "y"
                4: "*"
                5: "t"
                6: "-"
                7: "z"
                groups: undefined
                index: 0
                input: "x-y*t-z"
                
                Buradan sonrasında yapılacak işlem aldığımız input değerindeki  "x","y","z","t" yerlerine
                kullanıcıdan alıp state'e attığımız değerleri gömmek.Bunu yaptıktan sonraki durum şu:
                
                ---------------------------------
                console.log(newMatchedSummary) => 5+4-3*10;
                ---------------------------------
                */
                let newMatchedSummary = matched.input.replace("x",this.state.x).replace("y",this.state.y).replace("z",this.state.z).replace("t",this.state.t);
                this.setState({
                    summary : eval(newMatchedSummary)
                    //newMatched summary değerimiz string ifade olduğundan dolayı içindeki işlemi yapabilmek için eval fonksiyonunu kullanıp state'in içinde bulunan summary'e atıyoruz ve işlem gerçekleşmiş oluyor.
                })
    
        }
    }   
}
    render() {
        return (
            
            <Container>
            <Grid style>
                <Row size={0.5}>
                    {/*Üstten boşluk bırakmak için */}
                </Row>
                <Row  size={1}>
                    <Col>

                        {/*
                            5 inputta da value atamalar ve her text değiştiğinde ilgili inputun state'teki değerlerini değiştirmesi.
                            X,Y,Z,T değerlerine clicklendiği zaman mobil cihazda sayılar için sadece numeric klavyenin açılması.
                        */}

                        <Input
                        label = 'X'
                        value={this.state.x}
                        onChangeText={(x) => this.setState({x : x}, )}
                        keyboardType="numeric"
                        
                        />
                    </Col>
                    <Col>
                        <Input
                        label = 'Y'
                        value={this.state.y}
                        onChangeText={(y) => this.setState({y})}
                        keyboardType="numeric"
                            
                        />
                    </Col>
                    <Col>
                        <Input
                        label = 'Z'
                        value={this.state.z}
                        onChangeText={(z) => this.setState({z})}
                        keyboardType="numeric"
                          
                        />
                    </Col>
                    <Col>
                        <Input
                        label = 'T'
                        value={this.state.t}
                        onChangeText={(t) => this.setState({t})}
                        keyboardType="numeric"
                        
                        />
                    </Col>
                </Row>
                <Row size={1}>
                    
                    <Input
                        label = 'Formula'
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text})} 
                        placeholder='Formula'
                        />
                </Row>
                <Row  size={5}>
                    <Col>
                        <Button rounded primary
                            disabled={!this.state.x || !this.state.y || !this.state.z || !this.state.t || !this.state.text}
                            onPress={this.onPressButton}
                            title="Calculate"
                        />
                            {/*Kullanıcı tarafından girilen 5 inputtan herhangi biri girilmemiş ise button disable durumdadır.
                            Butona clicklendiğinde onPressButton fonksiyonu çalışmaktadır. */}

                        <Card style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                            <CardItem header>
                                {/*Sonucu veya hatayı bastırdığım yer */}
                                <Text>Result : {this.state.summary}</Text> 
                            </CardItem>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        </Container>
        );
    }
}

export default Content;