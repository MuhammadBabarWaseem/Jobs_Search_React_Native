import React from 'react'
import { TouchableHighlight, Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableHighlight style={styles.btnContainer} onPress={handlePress} >
      <Image source={iconUrl}  resizeMode = "cover" style={styles.btnImg(dimension)} />
    </TouchableHighlight>
  )
}

export default ScreenHeaderBtn