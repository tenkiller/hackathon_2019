import $ from 'jquery'
import dt from 'datatables.net'
import { STORAGE_KEY, TABLE_COLUMNS, TABLE_DATASET } from './constants'
import { setFormValues } from './storage'

let table = null
const dataTable = $('#dataTable')
const heatInput = $("#heatLevel")
const moistureInput = $("#moistureLevel")
const oceanicInput = $("#oceanicRate")

function drawTable(data) {
  if (table && table.destroy) { table.destroy() }
  table = dataTable.DataTable({
    data,
    columns: TABLE_COLUMNS.map(h => ({ title: h })),
    paging: false,
    searching: false,
    scrollX: true,
    scrollY: '400px',
    select: 'single',
    stateSave: false
  })
}

function filterData() {
  let data = filterBy(TABLE_DATASET, "Temp", Number.parseFloat(heatInput.val()))
  data = filterBy(data, "Moisture", Number.parseFloat(moistureInput.val()))
  data = filterBy(data, "Water", Number.parseFloat(oceanicInput.val()))
  drawTable(data)
}

function filterBy(data, col, value) {
  return data.filter(ds => ds[TABLE_COLUMNS.indexOf(col)] > value)
}

function resetData() {
  heatInput.val('0.0')
  moistureInput.val('0.0')
  oceanicInput.val('0.0')
}

function navigate() {
  window.location.assign('/show')
}

dataTable.on('click', 'tr', function () {
  const data = table.row(this).data()
  const values = {
    heat: data[TABLE_COLUMNS.indexOf("Temp")],
    moisture: data[TABLE_COLUMNS.indexOf("Moisture")],
    oceanic: data[TABLE_COLUMNS.indexOf("Water")],
  }
  setFormValues(values)
  navigate()
})

$("#submitButton").click(() => filterData())
$("#resetButton").click(() => resetData())

drawTable(TABLE_DATASET)
