const fbutton = () => {
    const button = document.querySelectorAll('#post_msg_inner p a')
    for (let index = 0; index < button.length; index++) {
        const element = button[index];
        if (element.innerText.indexOf('(hghg-button)') != -1) {
            element.innerText = element.innerText.replace('(hghg-button)', '')
            element.classList.add('hghg-button')
        }
    }
}
fbutton()