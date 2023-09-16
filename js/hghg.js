const header = document.querySelector('#header')
const menuinner = document.querySelector('#menu-inner')
const menuouter = document.querySelector('#menu-outer')
const load_mark = document.querySelector('#load_mark')
const load_p = document.querySelector('#load_mark #load_p')
const togglemenu_ = document.querySelector('#togglemenu')
const toggledark_ = document.querySelector('#toggledark')
const topbtn = document.querySelector('#topbtn')
const html = document.querySelector('html')
let n = true, n1 = true, page_
window.onload = () => {
    console.clear()
    load_mark.style.opacity = '0'
    load_p.innerText = '100%'
    let timeout_l = setTimeout(() => {
        load_mark.style.display = 'none'
        clearTimeout(timeout_l)
    }, 400)
    try {
        onload_1()
    } catch { }
    const next = document.getElementsByClassName('next')[0]
    const prev = document.getElementsByClassName('prev')[0]
    if (prev != undefined) {
        prev.innerHTML = '<i class="bi bi-chevron-left"></i>上一页'
    }
    if (next != undefined) {
        next.innerHTML = '下一页<i class="bi bi-chevron-right"></i>'
    }
}
const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    if (exdays == null) {
        document.cookie = cname + "=" + cvalue + ";path=/;SameSite=Lax;"
    } else {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/;SameSite=Lax;";
    }
}
const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}
const dark = () => {
    toggledark_.classList.add('bi-sun')
    toggledark_.classList.remove('bi-moon')
    setCookie('mode', 'dark', null)
    html.classList.add('dark')
    n1 = false
}
const light = () => {
    toggledark_.classList.remove('bi-sun')
    toggledark_.classList.add('bi-moon')
    setCookie('mode', 'light', null)
    html.classList.remove('dark')
    n1 = true
}

const toggledark = () => {
    if (n1) {
        dark()
    } else {
        light()
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark()
}

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
        if (event.matches) {
            dark()
        } else {
            light()
        }
    })

if (getCookie('mode') == 'dark') {
    dark()
} else {
    light()
}

const togglemenu = () => {
    if (n) {
        togglemenu_.style.transform = 'scale(1,0.2)'
        let tm = setTimeout(() => {
            togglemenu_.style.transform = 'scale(1)'
            clearTimeout(tm)
        }, 400)
        const mia = document.querySelectorAll('#menu-inner a')
        for (let index = 0; index < mia.length; index++) {
            const mia_ = mia[index]
            mia_.style.opacity = '0'
        }
        let i = 0, ival = setInterval(() => {
            if (i < mia.length) {
                i = i + 1
                const mia_ = mia[i - 1]
                mia_.style.opacity = '1'
            } else {
                clearInterval(ival)
            }
        }, 200)
        header.style.height = '100%'
        header.style.backdropFilter = bf
        menuinner.style.display = 'flex'
        menuouter.style.position = 'absolute'
        togglemenu_.classList.add('bi-x-lg')
        togglemenu_.classList.remove('bi-list')
        n = false
    } else {
        togglemenu_.style.transform = 'scale(1,0.1)'
        let tm = setTimeout(() => {
            togglemenu_.style.transform = 'scale(1)'
            clearTimeout(tm)
        }, 400)
        togglemenu_.classList.remove('bi-x-lg')
        togglemenu_.classList.add('bi-list')
        header.style.height = '54px'
        menuinner.style.display = 'none'
        menuinner.style.marginTop = '0'
        menuouter.style.position = 'static'
        n = true
    }
}
let scrollTop_, timeout, l_scrollTop = 0, t_scrollTop = 0, scrollPercentage = 0
window.onscroll = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        header.style.height = '54px'
        menuinner.style.display = 'none'
        menuinner.style.marginTop = '0'
        menuouter.style.position = 'static'
        togglemenu_.classList.add('bi-list')
        togglemenu_.classList.remove('bi-x-lg')
        n = true
        scrollTop_ = document.documentElement.scrollTop || document.body.scrollTop
        const scrollHeight_ = document.documentElement.scrollHeight
        const clientHeight_ = document.documentElement.clientHeight
        scrollPercentage = (Math.round(scrollTop_ / (scrollHeight_ - clientHeight_) * 100))
        if (scrollTop_ > 200) {
            topbtn.style.bottom = '20px'
            topbtn.innerHTML = scrollPercentage
            header.style.backdropFilter = bf
            header.classList.add('header_1')
            if (page_ == 'post' && list_p != []) {
                for (let index = 0, le = list_p.length; index < le; index++) {
                    const element = list_p[index]
                    let pdt = Math.round(element.dom_.getBoundingClientRect().top)
                    if (list_p[index - 1] != undefined && pdt >= 0 && pdt < pdt - Math.round(list_p[index - 1].dom_.getBoundingClientRect().top)) {
                        const toc_child = element.dom.parentNode.parentNode
                        let toc_child_ = toc_child.querySelector('ol .toc-child')
                        if (toc_child != null && toc_child_ != null) {
                            toc_child_.style.display = 'block'
                        } else if (toc_child != null && toc_child_ == null) {
                            toc_child_ = toc_child.parentNode
                            if (toc_child != null && toc_child_ != null) {
                                toc_child_.style.display = 'block'
                            } else if (toc_child != null && toc_child_ == null) {
                                toc_child_ = toc_child.parentNode
                                toc_child_.style.display = 'block'
                            }
                            toc_child_.style.display = 'block'
                        }
                        element.dom.classList.add('liactive')
                    } else if (list_p[index - 1] == undefined && pdt >= 0) {
                        const toc_child = element.dom.parentNode.parentNode
                        let toc_child_ = toc_child.querySelector('ol .toc-child')
                        if (toc_child != null && toc_child_ != null) {
                            toc_child_.style.display = 'block'
                        } else if (toc_child != null && toc_child_ == null) {
                            toc_child_ = toc_child.parentNode
                            toc_child_.style.display = 'block'
                        }
                        element.dom.classList.add('liactive')
                    } else {
                        const toc_child = element.dom.parentNode.parentNode
                        let toc_child_ = toc_child.querySelector('ol .toc-child')
                        if (toc_child != null && toc_child_ != null) {
                            toc_child_.style.display = 'none'
                        }
                        element.dom.classList.remove('liactive')
                    }
                }
            }
        } else {
            topbtn.style.bottom = '-60px'
            header.style.backdropFilter = 'saturate(100%) blur(0)'
            header.classList.remove('header_1')
        }
        if (scrollPercentage == 100) {
            topbtn.innerHTML = '<i class="bi bi-chevron-up"></i>'
        }
        t_scrollTop = scrollTop_
        if (l_scrollTop < t_scrollTop) {
            document.querySelector('#search').style.transform = 'scale(0)'
            header.style.height = '0'
        } else {
            header.style.height = '54px'
        }
        l_scrollTop = t_scrollTop
    }, 360)
}

const top_ = () => {
    window.scrollTo(0, 0)
}
