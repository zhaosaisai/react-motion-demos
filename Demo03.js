import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'

export default class Demo03 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: false
        }
    }
    startMove() {
        this.setState(prevState => ({
            start: !prevState.start
        }))
    }
    render() {
        return (
            <div>
                <button onClick={() => this.startMove()}>Strat Move</button>
                <Motion defaultStyle={{x:0}} style={{x:spring(this.state.start ? 400 : 0)}}>
                    {
                        position => 
                        <div style={{
                            width: '30px',
                            height: '30px',
                            backgroundColor:'#ccc',
                            transform: `translateX(${position.x}px)`
                        }}>

                        </div>
                    }
                </Motion>
            </div>
        )
    }
}