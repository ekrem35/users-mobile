/**
 * @format
 */

import React from 'react'
import { Button, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#9D73E9', '#5F70EC']}>
        <Button title="ENTER" onPress={() => true} />
      </LinearGradient>
    </View>
  )
}

export default Login
