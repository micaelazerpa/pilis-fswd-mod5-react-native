import { StatusBar, StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  content: {
    gap: 10,
    marginBottom:16
  },
  title: {
    color:COLORS.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.text,
  },
  input: {
    height: 50,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    borderRadius: 40,
    height: 300,
    width: 200,
    marginLeft:'auto',
    marginRight:'auto'
  }
})