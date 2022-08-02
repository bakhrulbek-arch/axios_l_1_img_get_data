axios.get('https://jsonplaceholder.typicode.com/photos/')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload(res.data.slice(0, 2))
            img_15(res.data.slice(3, 27))
        }
    })
    .catch(err => {
        console.log(err);
    })
let blc_two_img = document.querySelector('.blc_two_img')
let blc_select = document.querySelector('.blc_select')

function reload(arr) {
    for (let i of arr) {

        let img = document.createElement('img')
        img.src = i.url
        img.classList.add('set_img')
        blc_two_img.append(img)

    }
}
function img_15(arr) {
    for (let i of arr) {

        let img = document.createElement('img')
        img.src = i.url
        img.classList.add('set_img')
        blc_select.append(img)

    }
}

let btn_get_open = document.querySelector('.btn_get_open')
let clc_me = document.querySelector('.clc_me')

setTimeout(() => {
    clc_me.classList.add('clc_me_set')
    clc_me.innerHTML = 'Click get started to display data'
},800)
let close = document.querySelector('.close')
btn_get_open.onclick = () => {
    clc_me.classList.remove('clc_me_set')
    setTimeout(() => {
        clc_me.classList.add('clc_me_set')
        clc_me.innerHTML = 'Data opened'
    }, 500)
    close.classList.add('open')

}