// input value
function pressed() {
  let inputValue = document.getElementById("input").value
  return inputValue
}

// meterToFoot
function meterToFoot() {
  inputValue = pressed()
  let foot = 3.28084 * inputValue
  document.getElementById("metercalc").innerHTML +=
    " :" + foot.toFixed(3) + " " + "foot"
}
// litreToGallon
function litreToGallon() {
  inputValue = pressed()
  let gallon = 0.264172 * inputValue
  document.getElementById("litrecalc").innerHTML +=
    " :" + gallon.toFixed(3) + " " + "gallon"
}
// kgToPound
function kgToPound() {
  inputValue = pressed()
  let pound = 2.20462 * inputValue
  document.getElementById("kgcalc").innerHTML +=
    " :" + pound.toFixed(3) + " " + "pound"
}

// footToMeter
function footToMeter() {
  inputValue = pressed()
  let meter = 0.3048 * inputValue
  document.getElementById("metercalc1").innerHTML +=
    " :" + meter.toFixed(3) + " " + "meter"
}
// gallontolitre
function gallonToLitre() {
  inputValue = pressed()
  let litre = 3.78541 * inputValue
  document.getElementById("litrecalc1").innerHTML +=
    " :" + litre.toFixed(3) + " " + "litre"
}
// poundToKg
function poundToKg() {
  inputValue = pressed()
  let kg = 0.453592 * inputValue
  document.getElementById("kgcalc1").innerHTML +=
    " :" + kg.toFixed(3) + " " + "kg"
}
