// input value
function pressed() {
  let inputValue = document.getElementById("input").value
  return inputValue
}

// meterToFoot
function meterToFoot() {
  inputValue = pressed()
  let foot = 3.28084 * inputValue
  document.getElementById("metercalc").innerHTML =
    "Meter to foot: " + foot.toFixed(3) + " " + "foot"
  return 0
}
// footToMeter
function footToMeter() {
  inputValue = pressed()
  let meter = 0.3048 * inputValue
  document.getElementById("metercalc1").innerHTML =
    "Foot to meter: " + meter.toFixed(3) + " " + "meter"
  return 0
}
// litreToGallon
function litreToGallon() {
  inputValue = pressed()
  let gallon = 0.264172 * inputValue
  document.getElementById("litrecalc").innerHTML =
    "Litre to gallon: " + gallon.toFixed(3) + " " + "gallon"
  return 0
}
// gallontolitre
function gallonToLitre() {
  inputValue = pressed()
  let litre = 3.78541 * inputValue
  document.getElementById("litrecalc1").innerHTML =
    "Gallon to litre: " + litre.toFixed(3) + " " + "litre"
  return 0
}
// kgToPound
function kgToPound() {
  inputValue = pressed()
  let pound = 2.20462 * inputValue
  document.getElementById("kgcalc").innerHTML =
    "Kg to pound: " + pound.toFixed(3) + " " + "pound"
  return 0
}
// poundToKg
function poundToKg() {
  inputValue = pressed()
  let kg = 0.453592 * inputValue
  document.getElementById("kgcalc1").innerHTML =
    "Pound to kg: " + kg.toFixed(3) + " " + "kg"
  return 0
}
