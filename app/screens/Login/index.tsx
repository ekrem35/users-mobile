/**
 * @format
 */

import React from 'react'
import { Content, Container, View } from 'native-base'
import GradientButton from '../../../components/GradientButton'
import KeyPad from '../../../components/Keypad'

const Login = () => {
  return (
    <Container style={{ backgroundColor: '#0D0B2A' }}>
      <Content contentContainerStyle={{ flex: 1, padding: 32 }}>
        <View style={{ flex: 1 }}>
         <KeyPad onPress={(val) => console.log(val)} />
        </View>
        <View>
          <GradientButton onPress={() => true} title="ENTER" />
        </View>
      </Content>
    </Container>
  )
}

export default Login
