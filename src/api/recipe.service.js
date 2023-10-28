import { api } from './api'
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/recipe`

export const getRecipeList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)  
    /* .then(response => response.json())
    .then(text => console.log('...........',JSON.stringify(text))) */
    const objresponse= await response.json()
    //console.log('la respuesta--------------',objresponse) 
    return objresponse
    
  } catch {
    throw new Error('could not fetch recipes')
  }
}