let cefshow = true
const cef = () => {
    const list = list_cef
    let index = 0, index_ = 0
    const randomInteger = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }
    const randomRgbColor = () => {
        let r = randomInteger(255)
        let g = randomInteger(255)
        let b = randomInteger(255)
        return [r + ',', g + ',', b]
    }
    window.addEventListener('click', (e) => {
        if (cefshow) {
            const s_dom = document.createElement('span')
            let x = e.pageX
            let y = e.pageY - document.documentElement.scrollTop
            s_dom.style.top = y + 'px'
            s_dom.style.left = x + 'px'
            let [r, g, b] = randomRgbColor()
            if (index == list.length - 1) {
                index = 0
                s_dom.style.color = 'rgb(' + r + g + b + ')'
                s_dom.classList.add('cef')
                s_dom.innerText = list[index]
            } else {
                index = index + 1
                s_dom.classList.add('cef')
                s_dom.innerText = list[index]
                s_dom.style.color = 'rgb(' + r + g + b + ')'
            }
            document.body.appendChild(s_dom)
            new Promise((resolve) => {
                let timeout = setTimeout(() => {
                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        s_dom.style.opacity = '0'
                        s_dom.style.top = y - 60 + 'px'
                        s_dom.style.transition = 'all 400ms'
                        clearTimeout(timeout)
                        timeout = setTimeout(() => {
                            resolve()
                            clearTimeout(timeout)
                        }, 400)
                    }, 100)
                })
            }).then(() => {
                index_ = index_ + 1
                if (index_ == 10) {
                    const dom = document.querySelectorAll('.cef')
                    for (let index = 0; index < dom.length; index++) {
                        const element = dom[index];
                        document.body.removeChild(element)
                    }
                    index_ = 0
                } else {
                    s_dom.style.display = 'none'
                }
            })
        }
    })
}
cef()