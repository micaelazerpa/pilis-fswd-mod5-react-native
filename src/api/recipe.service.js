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
};

export const postRecipe = async (newRecipe) => {
  try {
    const response = await fetch(SERVICE_ENDPOINT, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(newRecipe)
      })  
    const objresponse= await response.json()
    return objresponse
    
  } catch {
    throw new Error('could not fetch recipes')
  }
};