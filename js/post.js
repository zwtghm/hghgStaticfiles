const list_p = []
const fposts = () => {
    const plen = document.querySelector('#plen')
    const plen_r = document.querySelector('#plen_r')
    const post_msg_inner = document.querySelector('#post_msg_inner')
    const lp = post_msg_inner.innerText.length
    page_ = 'post'
    const pmenu = toc.querySelectorAll('#toc .toc-text')

    if (pmenu != null) {
        for (let index = 0; index < pmenu.length; index++) {
            const pmenu_ = pmenu[index]
            const ptitle = document.getElementById(pmenu_.innerText.replaceAll(' ', '-'))
            list_p.push({ dom_: ptitle, dom: pmenu_.classList })
        }
    }
    plen.innerText = lp + '字'
    plen_r.innerText = Math.round(lp / 260) + '分钟'
}
fposts()