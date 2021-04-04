/**
 * @format
 */

import React from 'react'
import { Button, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

interface gbProps {
  title: String,
  onPress: () => void
}

const GradientButton = (props: gbProps) => {
  return (
        <Button style={styles.buttonStyles} full onPress={props.onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradientStyle}
                colors={['#9D73E9', '#5F70EC']}>
                <Text>{props.title}</Text>
            </LinearGradient>
        </Button>
  )
}

export default GradientButton
