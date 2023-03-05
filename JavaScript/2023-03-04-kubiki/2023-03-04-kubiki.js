var l = document.querySelector("#pirmais");
var r = document.querySelector("#otrais");
l === null || l === void 0 ? void 0 : l.addEventListener("click", function (event) {
    var targetElement = event.target;
    var isChild = targetElement.id == "";
    if (isChild)
        targetElement.parentNode.removeChild(targetElement);
    else
        r.innerHTML = r.innerHTML + "<div></div>";
});
r === null || r === void 0 ? void 0 : r.addEventListener("click", function (event) {
    var targetElement = event.target;
    var isChild = targetElement.id == "";
    if (isChild)
        targetElement.parentNode.removeChild(targetElement);
    else
        l.innerHTML = l.innerHTML + "<div></div>";
});
r === null || r === void 0 ? void 0 : r.addEventListener("click", function (event) {
    l.innerHTML = l.innerHTML + "<div></div>";
});
l === null || l === void 0 ? void 0 : l.addEventListener("click", function (event) {
    r.innerHTML = r.innerHTML + "<div></div>";
});
