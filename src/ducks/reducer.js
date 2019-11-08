const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mortgage: 0,
  rent: 0
}

const LOCATION_INFO = 'LOCATION_INFO'
const IMAGE_URL = 'IMAGE_URL'
const MONEY_INFO = 'MONEY_INFO'
const CLEAR_INFO = 'CLEAR_INFO'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOCATION_INFO:
      return { ...state, ...action.payload }
    case IMAGE_URL:
      return { ...state, ...action.payload }
    case MONEY_INFO:
      return { ...state, ...action.payload }
    case CLEAR_INFO:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export function updateLocation(locationObj) {
  return {
    type: LOCATION_INFO,
    payload: locationObj
  }
}

export function updateImage(url) {
  return {
    type: IMAGE_URL,
    payload: url
  }
}

export function updateCost(costObj) {
  return {
    type: MONEY_INFO,
    payload: costObj
  }
}

export function clear() {
  return {
    type: CLEAR_INFO,
    payload: initialState
  }
}