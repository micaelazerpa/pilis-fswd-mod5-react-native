import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1
  },
  title: {
    color:COLORS.text,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5
  },
  profileInfo: {
    flex:1,
    justifyContent: 'center'
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:18
  },
  profileLocation: {
    fontSize: 16,
    color: '#777',
    textAlign:'center'
  },
  content: {
    flex: 1,
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight:'auto',
    height: 50,
    width:120
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10
  }
})