const localStorage = window.localStorage

function setFormValues(values) {
  localStorage.setItem('exo_travel', JSON.stringify(values))
}

function getFormValues() {
  return JSON.parse(localStorage.getItem('exo_travel'))
}

export {
  getFormValues,
  setFormValues
}
