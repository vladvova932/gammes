import React, { Component } from 'react'

import SimpleCheckbox from './CheckBox.js'
import SimpleSelect from './SimpleSelect.js'
import ResetButton from './ResetButton.js'
import ScaleList from './ScaleList.js'
import Key from './Key.js'
import keysOct0 from './keysOct0.js'
import keysOct1 from './keysOct1.js'
import scales from './scales.js'



class Keyboard extends Component {
    state = {
        selectedKeys: [],
        selectedKeyIndex: -1,
        selectedScaleIndex: -1,
        numberOfOctaves: 1
    }

    constructor(props) {
        super(props)
        this.keyboardRef = React.createRef()
        this.keySelectorRef = React.createRef()
        this.scaleSelectorRef = React.createRef()
        this.keys = []
        this.updateOctaves()
        this.scales = scales
        this.keyScaleDatabase = []
        this.fillKeyScaleDatabase()
    }

    updateOctaves() {
        if (this.state.numberOfOctaves === 1) {
            this.keys = keysOct0
        }
        if (this.state.numberOfOctaves === 2) {
            this.keys = [...keysOct0, ...keysOct1]
        }
    }

    fillKeyScaleDatabase() {
        this.keyScaleDatabase = []
        for (var i = 0; i < this.keys.length; i++) {
            var scalesForKey = []
            for (var j = 0; j < this.scales.length; j++) {
                var scaleTones = this.scales[j].struct
                var keyScale = [i]
                for (var k = 0; k < scaleTones.length; k++) {
                    keyScale.push((this.state.numberOfOctaves === 1) ? ((keyScale[k] + scaleTones[k]) % 12) : ((keyScale[k] + scaleTones[k])))
                }
                scalesForKey.push(keyScale)
            }
            this.keyScaleDatabase.push(scalesForKey)
        }
    }

    // Arrow fx for binding
    handleKeyDblClick = (keyIndex) => {
        const selectedKeys = this.state.selectedKeys
        const keyIndexInSelectedKeys = selectedKeys.indexOf(keyIndex)
        this.resetSelectors()
        if (keyIndexInSelectedKeys > -1) {
            selectedKeys.splice(keyIndexInSelectedKeys, 1)
            this.setState({
                selectedKeys: selectedKeys
            })
        } else {
            this.setState({
                selectedKeys: [...selectedKeys, keyIndex]
            })
        }
    }

    // Arrow fx for binding
    handleKeyChange = (keyIndex) => {
        this.setState({
            selectedKeyIndex: keyIndex
        })
        if (this.scaleSelectIsFilled()) {
            this.renderScaleOnKeyboard(keyIndex, this.state.selectedScaleIndex)
        }
    }

    // Arrow fx for binding
    handleScaleChange = (scaleIndex) => {
        this.setState({
            selectedScaleIndex: scaleIndex
        })
        if (this.keySelectIsFilled()) {
            this.renderScaleOnKeyboard(this.state.selectedKeyIndex, scaleIndex)
        }
    }

    // Arrow fx for binding
    handleResetButtonClick = () => {
        this.flushKeyboard()
    }

    // Arrow fx for binding
    handleScaleButtonClick = (keyIndex, scaleIndex) => {
        this.renderScaleOnKeyboard(keyIndex, scaleIndex)
        this.keySelectorRef.current.setState({
            selected: keyIndex
        })
        this.scaleSelectorRef.current.setState({
            selected: scaleIndex
        })
    }

    keySelectIsFilled() {
        return (this.state.selectedKeyIndex !== -1)
    }

    scaleSelectIsFilled() {
        return (this.state.selectedScaleIndex !== -1)
    }

    // Arrow fx for binding
    flushKeyboard = () => {
        this.resetSelectors()
        this.setState({
            selectedKeys: []
        })
    }

    resetSelectors() {
        this.keySelectorRef.current.reset()
        this.scaleSelectorRef.current.reset()
        this.setState({
            selectedKeyIndex: -1,
            selectedScaleIndex: -1
        })
    }

    // Arrow fx for binding
    handleChangeCheckboxOctaves = (checked) => {
        this.flushKeyboard()
        this.setState({
            numberOfOctaves: checked ? 2 : 1
        })
    }

    renderScaleOnKeyboard(keyIndex, scaleIndex) {
        const selectedScale = scaleIndex
        const scaleStruct = this.scales[selectedScale].struct
        var selectedKeys = [keyIndex]
        for (var i = 0; i < scaleStruct.length; i++) {
            keyIndex = (this.state.numberOfOctaves === 1) ? ((keyIndex + scaleStruct[i]) % 12) : ((keyIndex + scaleStruct[i]))
            selectedKeys = [...selectedKeys, keyIndex]
        }
        this.setState({
            selectedKeys: selectedKeys
        })
    }

    subscribeToMouseStateChanges() {
        this.keyboardRef.current.onmousedown = () => {
            document.mouseIsDownOnKeyboard = true
        }
        this.keyboardRef.current.onmouseup = () => {
            document.mouseIsDownOnKeyboard = false
        }
    }

    getPotentialScales() {
        var potentialScales = []

        if (this.state.selectedKeys.length === 0) {
            return potentialScales
        }

        const selectedKeysIndexes = this.state.selectedKeys
        const keyScaleDatabase = this.keyScaleDatabase


        for (var i = 0; i < keyScaleDatabase.length; i++) {
            for (var j = 0; j < keyScaleDatabase[i].length; j++) {
                var flag = true
                for (var k = 0; k < selectedKeysIndexes.length; k++) {
                    if (keyScaleDatabase[i][j].indexOf(selectedKeysIndexes[k]) === -1) {
                        flag = false
                        break
                    }
                }
                if (flag) {
                    potentialScales.push({
                        keyIndex: i,
                        scaleIndex: j
                    })
                }
            }
        }

        return potentialScales
    }

    componentDidMount() {
        this.subscribeToMouseStateChanges()
    }

    render() {
        const {selectedKeys, numberOfOctaves} = this.state
        const numberOfOctavesClass = numberOfOctaves === 1 ? 'one-octave' : 'two-octaves'

        this.updateOctaves()
        this.fillKeyScaleDatabase()

        return (
            <div id="main-container">
                <ul className={`${numberOfOctavesClass} keyboard`} ref={this.keyboardRef}>
                    {this.keys.map((pianoKey, index) => (
                            <Key
                                key={index}
                                keyIndex={index}
                                color={pianoKey.dName === pianoKey.bName ? "white" : "black"}
                                dName={pianoKey.dName}
                                bName={pianoKey.bName}
                                dNameLat={pianoKey.dNameLat}
                                bNameLat={pianoKey.bNameLat}
                                onDblClick={this.handleKeyDblClick}
                                sound={pianoKey.sound}
                                letterOnKeyboard={pianoKey.letterOnKeyboard}
                                isSelected={selectedKeys.includes(index)}
                            />
                    ))}
                </ul>
                <SimpleCheckbox onChange={this.handleChangeCheckboxOctaves} />
                <div className="selects-container">
                    <SimpleSelect
                        data={this.keys}
                        type="key"
                        onChange={this.handleKeyChange}
                        htmlID="keySelector"
                        ref={this.keySelectorRef}
                    />
                    <SimpleSelect
                        data={scales}
                        type="scale"
                        onChange={this.handleScaleChange}
                        htmlID="scaleSelector"
                        ref={this.scaleSelectorRef}
                    />
                    <ResetButton onClick={this.handleResetButtonClick} />
                </div>
                <ScaleList 
                    potentialScales={this.getPotentialScales()} 
                    onClick={this.handleScaleButtonClick}
                    keys={this.keys}
                />
            </div>
        )
    }
}

export default Keyboard