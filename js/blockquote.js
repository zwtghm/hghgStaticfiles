const fbp = () => {
    const bp = document.querySelectorAll('blockquote p')
    for (let index = 0; index < bp.length; index++) {
        const element = bp[index];
        if (element.innerText.indexOf('(hghg-default)') != -1) {
            element.innerText = element.innerText.replace('(hghg-default)', '')
            element.classList.add('bdefault')
        } else if (element.innerText.indexOf('(hghg-warning)') != -1) {
            element.innerText = element.innerText.replace('(hghg-warning)', '')
            element.classList.add('bwarning')
        } else if (element.innerText.indexOf('(hghg-error)') != -1) {
            element.innerText = element.innerText.replace('(hghg-error)', '')
            element.classList.add('berror')
        } else {
            element.classList.add('bdefault')
        }
    }
}

fbp()