const fcopycode = () => {
  const code = document.querySelectorAll('figure')
  const code_ = document.querySelectorAll('figure code')
  let t1
  for (let index = 0; index < code.length; index++) {
    const element = code[index]
    const element_ = code_[index]
    const copybtn = document.createElement('button')
    const elem = document.createElement('div')
    elem.classList.add('code_outer')
    element.parentNode.replaceChild(elem, element)
    copybtn.innerHTML = '<i class="bi bi-clipboard-fill"></i>&nbsp;' + element.classList[1]
    copybtn.classList.add('copybtn')
    copybtn.onclick = () => {
      navigator.clipboard
        .writeText(element_.innerText.toString('utf-8'))
        .then(() => {
          copybtn.innerHTML = '<i class="bi bi-clipboard-check-fill"></i>&nbsp;' + element.classList[1]
          t1 = setTimeout(() => {
            copybtn.innerHTML = '<i class="bi bi-clipboard-fill"></i>&nbsp;' + element.classList[1]
            clearTimeout(t1)
          }, 1000)
        }).catch((_e) => {
          copybtn.innerHTML = '<i class="bi bi-clipboard-x-fill"></i>&nbsp;' + element.classList[1]
          t1 = setTimeout(() => {
            copybtn.innerHTML = '<i class="bi bi-clipboard-fill"></i>&nbsp;' + element.classList[1]
            clearTimeout(t1)
          }, 1000);
        })
    }
    elem.appendChild(copybtn)
    elem.appendChild(element)
  }
}

fcopycode()