import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'

const destination = 100

const moveContainer = {
    width: `${destination}px`,
    height:'40px',
    position:' relative',
    backgroundColor: '#ccc'
}

export default class Demo02 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 0
        }
    }

    startMove() {
        let flag = 1
        const req = () => {
            let {position} = this.state
            if(position >= destination) {
                flag = -1
            }else if(position <= 0) {
                flag = 1
            }
            this.setState({
                position: position + flag
            })
            requestAnimationFrame(req)
        }
        requestAnimationFrame(req)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.startMove()}>Strat Move</button>
                <div style={{...moveContainer}}>
                    <Motion 
                        defaultStyle={{x:0}}
                        style={{x:spring(this.state.position)}}
                    >
                        {
                            position =>
                            <div style={{
                                width:'40px',
                                height:'40px',
                                backgroundColor:'yellow',
                                transform:`translateX(${position.x}px)`
                            }}>
                                {Number(position.x).toFixed(0)}
                            </div>
                        }
                    </Motion>
                </div>
            </div>
        )
    }
}