/**
 * @format
 */

import React from 'react'
import { Content, Container, Text, View } from 'native-base'
import GradientButton from '../../../components/GradientButton'

const Login = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, padding: 32 }}>
        <View style={{ flex: 1 }}>
          <Text>text</Text>
        </View>
        <View>
          <GradientButton onPress={() => true} title="ENTER" />
        </View>
      </Content>
    </Container>
  )
}

export default Login
