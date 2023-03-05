let l = document.querySelector("#pirmais")
let r = document.querySelector("#otrais")

l?.addEventListener("click", (event) => {
  let targetElement: Element = event.target as Element
  let isChild: Boolean = targetElement.id == ""

  if (isChild) targetElement.parentNode.removeChild(targetElement)
  else r.innerHTML = r.innerHTML + "<div></div>"
})

r?.addEventListener("click", (event) => {
  let targetElement: Element = event.target as Element
  let isChild: Boolean = targetElement.id == ""

  if (isChild) targetElement.parentNode.removeChild(targetElement)
  else l.innerHTML = l.innerHTML + "<div></div>"
})

r?.addEventListener("click", (event) => {
  l.innerHTML = l.innerHTML + "<div></div>"
})
l?.addEventListener("click", (event) => {
  r.innerHTML = r.innerHTML + "<div></div>"
})
