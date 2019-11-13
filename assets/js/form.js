import $ from 'jquery'
import { STORAGE_KEY } from './constants'
import { setFormValues } from './storage'

const heatInput = $("#heatLevel")
const moistureInput = $("#moistureLevel")
const oceanicInput = $("#oceanicRate")

function saveData() {
  const values = {
    heat: heatInput.val(),
    moisture: moistureInput.val(),
    oceanic: oceanicInput.val(),
  }
  $('#savedMessage').show()
  setTimeout(() => $('#savedMessage').fadeOut(), 1000)
  setTimeout(() => navigate(), 2000)
  setFormValues(values)
}

function resetData() {
  heatInput.val('0.7')
  moistureInput.val('1.0')
  oceanicInput.val('1.0')
}

function navigate() {
  window.location.assign('/show')
}

$("#submitButton").click(() => saveData())
$("#resetButton").click(() => resetData())
