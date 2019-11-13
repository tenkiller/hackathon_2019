import { STORAGE_KEY } from './constants'

function setFormValues(values) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
}

function getFormValues() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY))
}

export {
  getFormValues,
  setFormValues
}
