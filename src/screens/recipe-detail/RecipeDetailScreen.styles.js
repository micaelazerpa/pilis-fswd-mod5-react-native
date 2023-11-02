import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  imageContainer: {
    height: 300
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 300
  },
  intro:{
    padding:10,
    marginLeft:10,
    marginBottom:20
  },
  fondo:{
    backgroundColor:COLORS.secondary,
    borderRadius:10,
    marginTop:10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  itemContainer: {
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor:COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding:10,
    marginLeft:10
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10
  },
  button: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 150,
    marginTop: 10,
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:10
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
})