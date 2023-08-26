const fgopo = () => {
    const postclistobj = JSON.parse(postclist)
    const postclistd = document.querySelector('#postclist')
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    new Promise((resolve) => {
        let timeout = setTimeout(() => {
            postclistd.setAttribute('href', '/' + postclistobj[getRandomInt(postclistobj.length)])
            clearTimeout(timeout)
            resolve()
        }, 1000)
    }).then(() => {
        postclistd.innerText = '传送 ✅'
    })
}
fgopo()