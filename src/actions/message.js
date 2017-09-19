import { MESSAGE_SHOW } from '../actions/types'

export const showMessage = (message) => ({type: MESSAGE_SHOW, payload: message})