const io = new IntersectionObserver(items => {
    items.forEach(function(item) {
    var target = item.target
    if(target.getAttribute('data-src') !=undefined && item.isIntersecting) {
        target.src = target.getAttribute('data-src')
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