const prog_ = JSON.parse(prog_1)
const typewriter = (data) => {
    if (data != null) {
        prog_.push(data.hitokoto)
        prog_.push(data.from)
    }
    let tywindex = 1, interval, lindex = 0, prog = prog_[lindex],timeout
    const clearText = () => {
        if (prog.length != 0) {
            document.querySelector('#typewriter').innerHTML = prog.slice(0, tywindex - 1) + typewriter_
            tywindex = tywindex - 1
            if (tywindex == 0) {
                clearInterval(interval)
                if (lindex >= 0 && lindex < prog_.length - 1) {
                    lindex = lindex + 1
                    prog = prog_[lindex]
                } else if (lindex == prog_.length - 1) {
                    lindex = 0
                    prog = prog_[lindex]
                } else {
                    lindex = lindex - 1
                    prog = prog_[lindex]
                }
                interval = setInterval(writeText, 260)
            }
        }
    }

    const writeText = () => {
        if (prog.length != 0) {
            document.querySelector('#typewriter').innerHTML = prog.slice(0, tywindex) + typewriter_
            tywindex = tywindex + 1
            if (tywindex == prog.length + 1) {
                clearInterval(interval)
                const tspan = document.querySelector('#typewriter span')
                tspan.classList.add('tspan')
                timeout= setTimeout(()=>{
                    tspan.classList.remove('tspan')
                    interval = setInterval(clearText, 100)
                    clearTimeout(timeout)
                },2800)
            }
        }
    }
    if (prog.length != 0) {
        interval = setInterval(writeText, 260)
    } else {
        clearInterval(interval)
    }
}