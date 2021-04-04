/**
 * @format
 */

import React from 'react'
import { Actions } from 'react-native-router-flux'

const Authorize = () => {
  React.useEffect(() => {
    Actions.login()
  }, [])
  return null
}

export default Authorize
