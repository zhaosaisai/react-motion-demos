import React, {Component} from 'react'
import {StaggeredMotion, spring, presets} from 'react-motion'
import './Demo04.css'

const presetsArray = [1,2,3,4,5,6]

export default class Demo04 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            x: 300,
            y: 300
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.mouseMove, false)
    }

    mouseMove = ({pageX:x, pageY: y}) => {
        this.setState({
            x,
            y
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
        return (
            <StaggeredMotion
                defaultStyles={presetsArray.map(() => ({x:0, y:0}))}
                styles={this.getStyles}
            >
            {
                balls => 
               <div className="ball-container">
                   {
                       balls.map((value, index) => {
                           return (
                               <div className="ball" 
                                    key={index}
                                    style={{
                                        zIndex: presetsArray.length - index,
                                        transform: `translate3d(${value.x - 25}px, ${value.y - 25}px, 0)`
                                    }}
                                    >
                                    {index + 1}    
                                </div>
                           )
                       })
                   }
               </div>
            }
            </StaggeredMotion>
        )
    }
}