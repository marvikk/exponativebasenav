import React from 'react';
import { 
    Container
   } from 'native-base';

import { Col, Grid, Row } from 'react-native-easy-grid';

import styles from '../styles'

// import ButtonLayout from './ButtonLayout';
import HeaderComponent from './Header';
import Clock from './Clock';
import Riddle from './Riddle';
import Controls from './Controls';


export default function Main(props) {
    
        return (
                <Container style={styles.container}>
                    <HeaderComponent {...props}/>
    
                    <Grid>
                    <Row  size={1} style={{ backgroundColor: "#fff"}}>
                        <Col style={{ backgroundColor: '#635DB7' }} size={2}></Col>
                        <Col style={{ backgroundColor: 'lightgreen' }} size={1}>
                        <Clock />
                        </Col>
                    </Row>
                    <Row size={4}>
    
                        <Col style={{ backgroundColor: '#fff'}}>
                        <Riddle />
                        </Col>
                    </Row>
                    <Row  size={1.5} style={{ backgroundColor: "#fff"}}>
                        <Col style={{ backgroundColor: '#635DB7' }}>
                        <Controls />
                        </Col>
                    </Row>
                        
                    </Grid>
    
                </Container>
                        );
    
}