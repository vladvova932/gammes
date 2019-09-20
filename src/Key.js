import React from 'react'
import PropTypes from 'prop-types'
import {isMobile} from 'react-device-detect';


class Key extends React.Component {

    constructor(props) {
        super(props)
        this.keyRef = React.createRef()
        this.letterOnKeyboard = props.letterOnKeyboard
        this.sound = props.sound
        this.longTouchDuration = 500
        this.timer = undefined
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (e.key === this.letterOnKeyboard) {
                this.playKey()
            }
        })
        document.addEventListener("keyup", (e) => {
            if (e.key === this.letterOnKeyboard) {
                this.keyRef.current.classList.remove('key-active')
            }
        })
    }

    playKey() {
        /* TODO: shound I remove audio after playing ? */ 
        const audio = new Audio(this.sound)
        audio.play()
        this.keyRef.current.classList.add('key-active')
    }

    render() {
        const { keyIndex, color, dName, bName, dNameLat, bNameLat, onDblClick, isSelected } = this.props

        return (<li className={`key key-${color} key-${keyIndex}` + (isSelected ? " key-selected" : "")}
            onMouseDown={(event) => {
                event.preventDefault()
                if (!isMobile) {
                    this.playKey()
                }
            }}
            onMouseOver={(event) => {
                if (document.mouseIsDownOnKeyboard) {
                    this.playKey()
                }
            }}
            onDoubleClick={(event) => {
                onDblClick(keyIndex)
            }}
            onMouseLeave={(event) => {
                event.target.classList.remove('key-active')
            }}
            onMouseUp={(event) => {
                event.target.classList.remove('key-active')
            }}
            onTouchStart={(event) => {
                this.playKey()
                this.timer = setTimeout(() => {
                    onDblClick(keyIndex)
                }, this.longTouchDuration)
            }}
            onTouchEnd={(event) => {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
            }}
            draggable={false}
            ref={this.keyRef}>
            
            <p className="dName">{dName}</p>
            <p className="bName">{bName}</p>
            <p className="dNameLat">{dNameLat}</p>
            <p className="bNameLat">{bNameLat}</p>
        
        </li>)

    }
}


Key.propTypes = {
    color: PropTypes.string.isRequired,
    dName: PropTypes.string.isRequired,
    bName: PropTypes.string.isRequired,
    dNameLat: PropTypes.string.isRequired,
    bNameLat: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired
}

export default Key