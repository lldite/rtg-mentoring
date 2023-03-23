let kilogram = document.querySelector("#kg") as HTMLInputElement
let pound = document.querySelector("#lb") as HTMLElement
// 1. var:
kilogram.addEventListener("change", function (event) {
  pound.innerHTML = kilogram.value * 2.205
})

//2. var:
function handler(event: Event): void {
  pound.innerHTML = kilogram.value * 2.205
}
kilogram.addEventListener("change", handler)

let meter = document.querySelector("#m") as HTMLInputElement
let foot = document.querySelector("#ft") as HTMLInputElement
let poga = document.querySelector("#button") as HTMLElement

// ar pogu m -> ft
poga.addEventListener("click", function (event) {
  console.log(2)
  foot.value = meter.value * 3.281
})

console.log(document.querySelector("#button"))

// bez pogas m <-> ft
function handleChange(event: Event): void {
  console.log("TADA!")
  if ((event.target as Element).id == "m") foot.value = meter.value * 3.281
  if ((event.target as Element).id == "ft") meter.value = foot.value / 3.281
}

meter.addEventListener("change", handleChange)
foot.addEventListener("change", handleChange)

// ar pogu m <-> ft
poga.addEventListener("click", (event) => {
  let toMeter: Boolean = meter.value == ""
  let toFoot: Boolean = foot.value == ""
  let mustConvert: Boolean = toMeter != toFoot

  if (mustConvert) {
    console.log("dati ir konvertējami")
    if (toMeter) meter.value = foot.value / 3.281 //meter.value = parseInt(foot.value, 10) * 2 else {}
    if (toFoot) foot.value = meter.value * 3.281 //foot.value = parseInt(meter.value, 10) / 2 else {}
  } else {
  }
})
