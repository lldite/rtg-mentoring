var kilogram = document.querySelector("#kg");
var pound = document.querySelector("#lb");
// kilogram.addEventListener("change", function (event) {
//   pound.innerHTML = kilogram.value * 2.205
// })
function handler(event) {
    pound.innerHTML = kilogram.value * 2.205;
}
kilogram.addEventListener("change", handler);
var meter = document.querySelector("#m");
var foot = document.querySelector("#ft");
var poga = document.querySelector("#button");
// poga.addEventListener("click", function (event) {
//   console.log(2)
//   foot.value = meter.value * 3.281
// })
console.log(document.querySelector("#button"));
// function handleChange(event: Event): void {
//   console.log("TADA!")
//   if ((event.target as Element).id == "m") foot.value = meter.value * 3.281
//   if ((event.target as Element).id == "ft") meter.value = foot.value / 3.281
// }
// meter.addEventListener("change", handleChange)
// foot.addEventListener("change", handleChange)
poga.addEventListener("click", function (event) {
    var toMeter = meter.value == "";
    var toFoot = foot.value == "";
    var mustConvert = toMeter != toFoot;
    if (mustConvert) {
        console.log("dati ir konvertējami");
        if (toMeter)
            meter.value = foot.value / 3.281; //meter.value = parseInt(foot.value, 10) * 2 else {}
        if (toFoot)
            foot.value = meter.value * 3.281; //foot.value = parseInt(meter.value, 10) / 2 else {}
    }
    else {
    }
});
