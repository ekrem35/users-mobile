/**
 * @format
 */

import React from 'react'
import { Content, Container, View, Text } from 'native-base'
import GradientButton from '../../../components/GradientButton'
import KeyPad from '../../../components/Keypad'

const Login = () => {
  const [digits, setDigits] = React.useState<string[]>([])
  return (
    <Container style={{ backgroundColor: '#0D0B2A' }}>
      <Content contentContainerStyle={{ padding: 32, flex: 1 }}>
        <View style={{ justifyContent: 'flex-end', flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60, marginBottom: 10 }}>
            {digits.map((digit, index) => <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 10 }} key={index}>⚪</Text>)}
          </View>
          <KeyPad
            onPress={(val) => {
              const newDigits = [...digits]
              if (val === 'enter') {
                if (newDigits.length < 1) {
                  return null
                }
                newDigits.splice(newDigits.length - 1, 1)
                setDigits(newDigits)
                return null
              }
              if (digits.length >= 6) {
                return null
              }
              newDigits.push(val)
              setDigits(newDigits)
            }} />
          <GradientButton onPress={() => true} title="ENTER" />
        </View>
      </Content>
    </Container>
  )
}

export default Login
