const fimgr = () => {
    const imgr = document.querySelectorAll('#post_msg_inner img')
    const mark = document.createElement('div')
    mark.classList.add('imgmark')
    document.body.appendChild(mark)
    let limgr = true, limgr_ = true
    for (let index = 0; index < imgr.length; index++) {
        const element = imgr[index]
        element.onclick = (e) => {
            cefshow = false
            if (limgr) {
                element.style.opacity = '0'
                mark.style.display = 'block'
                mark.style.opacity = '0'
                setTimeout(() => {
                    element.style.opacity = '1'
                    mark.style.opacity = '1'
                    element.classList.add('big_img')
                }, 400)
                limgr = false
            } else {
                if (limgr_) {
                    if (e.pageX>=window.innerWidth/2) {
                        element.style.right = e.pageX+'px'
                    } else {
                        element.style.left = e.pageX+'px'
                    }
                    element.style.transform = 'scale(1.4)'
                    limgr_ = false
                } else {
                    element.style.right = '0'
                    element.style.left = '0'
                    element.style.transform = 'scale(1)'
                    limgr_ = true
                }
            }
            mark.onclick = () => {
                cefshow = true
                element.style.opacity = '0'
                mark.style.display = 'block'
                element.style.transform = 'scale(1.4)'
                mark.style.opacity = '0'
                setTimeout(() => {
                    element.style.opacity = '1'
                    mark.style.display = 'none'
                    mark.style.opacity = '0'
                    element.style.transform = 'scale(1)'
                    element.classList.remove('big_img')
                }, 400)
                limgr = true
                limgr_ = true
            }
        }
    }
}
fimgr()