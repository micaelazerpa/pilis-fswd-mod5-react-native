import { api } from './api'
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/users`

export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    const objresponse= await response.json()
    return objresponse
  } catch {
    throw new Error('could not fetch users')
  }
}