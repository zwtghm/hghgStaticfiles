const io = new IntersectionObserver(items => {
    items.forEach(function(item) {
    var target = item.target
    if(target.getAttribute('src').indexOf('hghglazy:') != -1 && item.isIntersecting) {
        target.src = target.src.replace('hghglazy:','')
        io.unobserve(target)
    }
    })
})
Array.from(document.querySelectorAll('img')).forEach(function(item) {
    item.style.filter='blur(20px)'
    item.onload = () => {
        item.style.filter='blur(0)'
    }
    io.observe(item)
})