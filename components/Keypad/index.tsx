/**
 * @format
 */

import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, Icon } from 'native-base'
import styles from './styles'

interface KeyPadButtonProps {
    key: string | number,
    label: string | number,
    empty: true | false,
    onPress: (val: string) => void
}

const Button = (props: KeyPadButtonProps) => {
  if (props.empty) {
    return (
        <TouchableOpacity key={props.key} style={[styles.rowStyle, { backgroundColor: 'transparent' }]} />
    )
  }
  return (
        <TouchableOpacity onPress={() => props.onPress(String(props.label))} key={props.label} style={styles.rowStyle}>
            {props.label === 'enter'
              ? <Icon style={{ color: 'white' }} type="AntDesign" name="enter" />
              : <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.label}</Text>}
        </TouchableOpacity>
  )
}

Button.defaultProps = {
  empty: false,
  key: 'default-key-prop',
  label: ''
}

interface keyPadProps {
    onPress: (val: string) => void
}

const KeyPad = (props: keyPadProps) => {
  return (
        <View style={{ flex: 1 }}>
            <View style={styles.columnStyle}>
                {[1, 2, 3].map((num, index) => (
                    <Button onPress={props.onPress} key={index} label={num} />
                ))}
            </View>
            <View style={styles.columnStyle}>
                {[4, 5, 6].map((num, index) => (
                    <Button onPress={props.onPress} key={index} label={num} />
                ))}
            </View>
            <View style={styles.columnStyle}>
                {[7, 8, 9].map((num, index) => (
                    <Button onPress={props.onPress} key={index} label={num} />
                ))}
            </View>
            <View style={[styles.columnStyle, { justifyContent: 'flex-end' }]}>
                <Button onPress={() => ''} empty />
                <Button label={0} onPress={props.onPress} />
                <Button label={'enter'} onPress={props.onPress} />
            </View>
        </View>
  )
}

export default KeyPad
