/**
 * @format
 */

import React from 'react'
import { Router as FluxRouter, Stack, Scene } from 'react-native-router-flux'
import Authorize from './Authorize'
import Screens from '../app/screens'

const Router = () => {
  return (
        <FluxRouter>
            <Stack key="root">
                <Scene hideNavBar key="auth" component={Authorize}></Scene>
                <Scene hideNavBar key="login" component={Screens.Login}></Scene>
            </Stack>
        </FluxRouter>
  )
}

export default Router
