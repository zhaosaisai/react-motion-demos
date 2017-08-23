import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

export default class Demo01 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Motion 
                defaultStyle={{x:0}}
                style={{x:spring(100)}}
            >
                {
                    inteportedValue => 
                    <div style={{
                        backgroundColor:'red',
                        width:`${inteportedValue.x * 2}px`,
                        height:`${inteportedValue.x}px`
                    }}>
                        {inteportedValue.x}
                    </div>
                }
            </Motion>
        )
    }
}