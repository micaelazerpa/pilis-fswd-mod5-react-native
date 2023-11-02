import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE, COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderColor: COLORS.text,
    borderRadius: 40 
  },
  title: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: 'bold',
    color: COLORS.text,
    width: '100%',
    justifyContent:'center',
    textAlign:'center',
    bottom: 300
  }
})