import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import OBSNavigation from './obs-navigation'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const defaultBackgroundStyle = {
  height: 'auto',
  minHeight: '100vh',
  background: '#181818',
  padding: 0,
  color: 'whitesmoke',
}

const OBSPictureNavigationApp = () => {
  // eslint-disable-next-line no-unused-vars
  const handleStartBiblePlay = (curSerie,bookObj,id) => {
    console.log(curSerie)
  }
  return (
    <div style={defaultBackgroundStyle}>
      <ThemeProvider theme={theme}>
      <OBSNavigation
        //      isPaused={isPaused}
        onReset={() => console.log("onReset")}
        onExitNavigation={() => console.log("onExitNavigation")}
        onStartPlay={handleStartBiblePlay}
      />
      </ThemeProvider>
    </div>
  )
}

export default OBSPictureNavigationApp
