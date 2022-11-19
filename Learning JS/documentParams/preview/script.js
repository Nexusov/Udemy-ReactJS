const box = document.querySelector('.box')
const btn = document.querySelector('button')


const width = box.clientWidth
const height = box.clientHeight

const offWidth = box.offWidth
const offHeight = box.offHeight

const scrollWidth = box.scrollWidth
const scrollHeight = box.scrollHeight


btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px'

    console.log(box.scrollTop) // scrollTop покажет сколько текста уже было пролистано вниз в px
})


console.log(box.getBoundingClientRect) // координаты box
console.log(box.getBoundingClientRect().top) 


const boxStyle = window.getComputedStyle(box)
console.log(boxStyle) // выведет все computed стили у элемента
console.log(boxStyle.display) // выведет значение свойства display у элемента (block)


console.log(document.documentElement.clientWidth)