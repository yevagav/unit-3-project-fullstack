import { getSuggestedQuery } from '@testing-library/react'
import * as userAPI from './users-api'

export async function signUp (userData) {
      // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signup(userData)
  // Persist the token to localStorage
  window.localStorage.setItem('token', token)
  return getUser()
}