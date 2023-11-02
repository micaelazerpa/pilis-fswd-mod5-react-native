import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey
  },
  title:{
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
    fontSize:18,
    textAlign:'center'
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  itemList: {
    padding: 10
  },
  itemImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  itemTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
    fontSize:18
  },
  text:{
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom:20,
    fontSize:15
  },
  button: {
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 160,
    marginTop: 10,
    marginBottom:10,
    fontWeight: 'bold',
    fontSize:18,    
    marginLeft:'auto',
    marginRight:'auto'
  }
})