import React, { Component } from 'react';
import Canvas from './Canvas';
import Descriptions from './Descriptions';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Canvas />
                <Descriptions/>
            </div>
        )
    }
}
