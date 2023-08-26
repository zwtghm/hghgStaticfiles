const search_list = JSON.parse(post_list)
const search = document.querySelector('#search')
const search_input = document.querySelector('#search #search_input')
const search_menu = document.querySelector('#search #search_menu')
const fsearch = {}
fsearch.hsearch = true
for (let index = 0; index < search_list.length; index++) {
    const element = search_list[index]
    search.addEventListener('input',()=>{
        clearTimeout(fsearch.timeout)
        fsearch.timeout = setTimeout(()=>{
            while (search_menu.hasChildNodes()) {
                search_menu.removeChild(search_menu.firstChild)
            }
            if (element.title.indexOf(search_input.value) != -1) {
                const dom = document.createElement('a')
                dom.setAttribute('href',element.path)
                dom.innerText = element.title
                search_menu.appendChild(dom)
            } else {
                search_menu.innerText = '没有找到结果'
            }
        },600)
    })
}
const search_b = () => {
    if (fsearch.hsearch) {
        search.style.transform = 'scale(1)'
        fsearch.hsearch = false
    } else {
        search.style.transform = 'scale(0)'
        fsearch.hsearch = true
    }
}
