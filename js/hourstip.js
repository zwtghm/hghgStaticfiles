const hourstip_ = document.querySelector('#hourstip')
const avatar = document.querySelectorAll('.avatar_outer')
const time_ = () => {
    let self = this
    let date = new Date()
    if (date.getHours() >= 0 && date.getHours() < 12) {
        self.hoursTip = "上午好"
        avatar[0].classList.add('avatar_outer_1')
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        self.hoursTip = "下午好"
        avatar[0].classList.add('avatar_outer_2')
    } else {
        self.hoursTip = "晚上好"
        avatar[0].classList.add('avatar_outer_3')
    }
    return self
}
hourstip_.innerText = time_().hoursTip