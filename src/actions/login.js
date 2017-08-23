export const SUBMIT_PHONE = 'LOGIN_SUBMIT_PHONE'
export const SUBMIT_PHONE_ERROR = 'LOGIN_SUBMIT_PHONE_ERROR'
export const SUBMIT_PHONE_SUCCESS = 'LOGIN_SUBMIT_PHONE_SUCCESS'
export const SUBMIT_CODE = 'LOGIN_SUBMIT_CODE'
export const SUBMIT_CODE_ERROR = 'LOGIN_SUBMIT_CODE_ERROR'
export const SUBMIT_CODE_SUCCESS = 'LOGIN_SUBMIT_CODE_SUCCESS'

import eventEmitter from '../utils/eventEmitter'

export function submitPhone() {
  eventEmitter.emit('dispatch', { type: SUBMIT_PHONE })
}

export function submitCode() {
  eventEmitter.emit('dispatch', { type: SUBMIT_CODE})
}
