import React, {Component} from 'react'
import {StaggeredMotion, Motion ,spring, presets} from 'react-motion'

import './Demo04.css'

const presetsArray = [1,2,3,4,5,6]

export default class Demo05 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            x: 100,
            y: 100,
            size: 50,
            resize: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.mouseMove, false)
    }

    mouseMove = ({pageX:x, pageY:y}) => {
        this.setState({
            x,
            y,
            resize: false
        })
    }

    mouseClick = (index) => {
        this.setState({
            resize: true
        })
    }

    getStyles = (prevState) => {
        return prevState.map((value, index) => {
            return index === 0
                    ? this.state
                    : {
                        x: spring(prevState[index - 1]['x'], presets.gentle),
                        y: spring(prevState[index - 1]['y'], presets.gentle)
                    }
        })
    }

    render() {
        const {resize, size} = this.state
        return (
            <StaggeredMotion 
                defaultStyles={presetsArray.map(() => ({x:0, y:0, size:50}))}
                styles={this.getStyles}
            >
            {
                prevState => 
                <div className="ball-container">
                    {
                        prevState.map((value, index) => (
                            <Motion
                                style={{w:spring(resize ? size * (index + 1) : size)}}
                                key={index}
                            >
                            {
                                newSize => (
                                    <div 
                                        className="ball"
                                        style={{
                                            transform:`translate3d(${(value['x'] - 25) - (newSize['w'] - 50) / 2}px, ${(value['y'] - 25) - (newSize['w'] - 50) / 2}px, 0)`,
                                            zIndex: presetsArray.length - index,
                                            width: `${newSize['w']}px`,
                                            height: `${newSize['w']}px`,
                                            borderRadius: `${newSize['w']}px`
                                        }}
                                        onClick={this.mouseClick.bind(this, index)}
                                        >
                                        {index}
                                    </div>
                                )
                            }
                            </Motion>
                            
                        ))
                    }
                </div>
            }
            </StaggeredMotion>
        )
    }
}