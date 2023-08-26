const toast = document.createElement('div')
toast.setAttribute('id','toast')
toast.style.top='-100px'
const onload_1 = () => {
    toast.style.top='60px'
}
document.body.appendChild(toast)
const p1 = new Promise((resolve)=>{
    let timeout_4 = setTimeout(()=>{
        toast.style.top='-100px'
        clearTimeout(timeout_4)
        resolve()
    },3200)
}).then(()=>{
    let timeout_5 = setTimeout(()=>{
        toast.style.display = 'none'
        clearTimeout(timeout_5)
    },400)
})