const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const titles = document.querySelectorAll('.card-title')

let currentActive = 1
let currentShow = 1

next.addEventListener('click', () => {
    currentActive++
    currentShow++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    if(currentShow > titles.length){
        currentShow = titles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    currentShow--
    if(currentShow < 1){
        currentShow = 1
    }

    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    titles.forEach((title, idx) => {
        if(idx < currentShow){
            removeShowClasses()
            title.classList.add('show')
        }
    })


    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    }else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

function removeShowClasses() {
    titles.forEach(title => {
        title.classList.remove('show')
    })
}